---
id: herbs2rest
title: REST - Herbs2REST
sidebar_label: REST
slug: /glues/herbs2rest
---

Create REST endpoints using the metadata from use cases and entities. Save time and effort by automating endpoint creation while maintaining the ability to customize the REST API as needed.


## Introduction

Herbs2REST is a glue that creates REST endpoints using the metadata from use cases and entities. Some key principles are followed to make this possible:

**Convention over configuration**: There is a established industry convention for REST APIs. For example, a use case like 'Read an User' will use the `GET` method, have a ID parameter, and the path will be `/users/:id`. Herbs2REST will use these conventions to generate the endpoints. With this, it is possible to create a REST API with minimal configuration.

**Focus on the domain**: Herbs2REST will use the domain metadata to generate the endpoints. And, although not all the necessary metadata to generate the endpoints is available in the domain, it is expected that the domain metadata will be the main source of information. Following this principle will make maintining the REST API easier, since your API will change as your domain changes.

**Configuration when necessary**: It is possible to override the conventions when necessary. For example, if the convention is to use the `GET` method for a read use case, but the use case needs to use the `POST` method, it is possible to override the convention.

## Installation

- If the project will be created with the Herbs CLI, choose 'Yes' when prompted for the REST option.

- Otherwise, install the package using the following command:

```bash
npm install @herbsjs/herbs2rest
```

## Usage
### Basic Usage

Follow these three steps to get started with Herbs2REST:

1. Initialize REST endpoints:

    ```javascript
    const { endpoints, routes } = require('@herbsjs/herbs2rest')

    endpoints({ herbarium, controller }, {
        'v1': (endpoints) => {
            // ignore the FindUser use case
            endpoints.ignore('FindUser') 

            // override the default method for the SearchUser endpoint:
            // GET /v1/users/search
            endpoints.for('SearchUser').use({
                method: 'GET'
            })

            // generate the endpoints for all the other use cases in the herbarium
            endpoints.build()
        }
    })
    ```

    Where `herbarium` is a [Herbarium](../herbarium/getting-started) instance and `controller` is a default controller for all use cases.

    The above example will:
      - not generate an endpoint for the `FindUser` use case.
      - will override the default method for the `SearchUser` use case to use the `GET` method.
      - generate the endpoints for all the other use cases in the `herbarium`
      - all this for the `v1` version.

    This step will create endpoints for use cases in the `herbarium` and populated with metadata (`version`, `resource`, `method`, `path`, `parameters`, `parametersHandler`, `authorizationHandler`, and `controller`)

2. Attach the endpoints to the Express server or router:

    ```javascript
    routes({ herbarium, server }).attach()
    ```

    Where `server` is an Express server or router.

    Herbs2REST will create Express endpoints according to the provided metadata.

    Example output:

    ```
    GET /v1/users/search
    ```

### From Metadata to REST Endpoint

Herbs2REST will create REST endpoints based on domain metadata, such as from use cases and entities. 

Conventions will be applied to create the endpoints (ex: a `read` use case will use the `GET` method). It is possible to override the conventions if necessary.

```javascript
    endpoints({ herbarium, controller }, {
        'v1': (endpoints) => {
            endpoints.for('SearchUser').use({
                method: 'GET'
            })
```

Endpoint Metadata:

- `'version:' {}`: String. This is used to create the final path. This is informed on the scoped context.

    Example: `v2`

    Output: `/v2/users/search`

    If a empty string is provided, the version will be ignored.

- `method`: String. HTTP method (`GET`, `POST`, `PUT`, `DELETE`, etc.).

    Example: `GET`

    Output: `GET /v1/users/search`

- `resource`: String. Resource name. This is used to create the final path.

    Example: `custom`

    Output: `/v1/custom/:id`

- `path`: String. The final path. If this is provided, other metadata will be ignored.

    Example: `/v1/custom/search/user`

    Output: `/v1/custom/search/user`

    If not provided, the path will be generated using `/{version}/{resource}/{parameters}` convention.

- `parameters`: Object. Parameters metadata.

    Example: `{ params: { id: Number }, query: { name: String } }`

    Output: `{ params: { id: Number }, query: { name: String } }`

    Parameters source: `params`, `query`, `body`, `headers`, `cookies`, etc.

    Parameters type: `String`, `Number`, `Boolean`, `Date`, `Array`, `Object`. Entity types are not supported.

    For IDs to work properly, the [IDs](../entity/features#id-fields) in the entity must match the IDs in the use case request.

- `parametersHandler`: Function `parametersHandler(req, parameters)`. Extract parameters from the request using the corresponding source and cast them to the corresponding type.

    Example:

    ```javascript
    function customParametersHandler(req, parameters) {
      return {
        id: req.params.id,
        name: req.body.name,
      }
    }

    endpoints({ herbarium, controller }, {
      'v1': (endpoints) => {
          endpoints.for('SearchUser').use({
              parametersHandler: customParametersHandler
          })
    ```

- `controller`: Function `controller({ usecase, request, authorizationInfo, req, res, next, path, method })`. Replace the default controller.

    Example:

    ```javascript
    function customController({ usecase, request, authorizationInfo, req, res, next, path, method }) {
      // Custom logic here
    }

    endpoints({ herbarium, controller }, {
      'v1': (endpoints) => {
          endpoints.for('SearchUser').use({
              controller: customController
          })
    ```

    The controller will receive the use case for the request as well as the request (parsed) and the authorization information (parsed).

    It is responsible for calling the use case and sending the response with the correct HTTP status code.

- `authorizationHandler`: Function `authorizationHandler(req)`. Extract authorization information from the request.

    Example:

    ```javascript
    function customAuthorizationHandler(req) {
      return {
        user: req.user,
      }
    }

    endpoints({ herbarium, controller }, {
      'v1': (endpoints) => {
          endpoints.for('SearchUser').use({
              authorizationHandler: customAuthorizationHandler
          })
    ```

## Conventions

### Path Conventions

The default path convention is: `/{version}/{resource}/{parameters}`

The `resource` name convention uses the entity name as the resource name. 

`version`, `resource`, and `parameters` can be overridden individually.

### Parameters Convention

The parameters convention takes into account a few things:
- Use case (request, operation metadata)
- Entity (ID fields)
- HTTP method

Herbs2REST will all theses things to generate the parameters metadata.

For example, an update use case:

```js
const entity = entity('User', {
  id1: id(Number),
  name: field(String),
  isActive: field(Boolean),
  // ...
})

const uc = usecase('Activate User', {
  request: { id1: Number, isActive: Boolean },
  // ...
})

herbarium.usecases.add(uc, 'ActivateUsecase').metadata({ operation: herbarium.crud.update, entity })

// Generate the metadata:
// parameters: { params: { id1: Number }, body: { isActive: Boolean } }
// path: /users/:id1
```

:::tip
Hersb2REST uses the entity metadata (IDs) to generate the parameters metadata in some cases.
Without the entity metadata, it would not be possible to know which field is the ID since the use case request does not have this information.
:::

## Advanced Scenarios

### Ignore Endpoints

It is possible to avoid generating endpoints for a specific use case.

```javascript
    endpoints({ herbarium, controller }, {
        'v1': (endpoints) => {
            // ignore the FindUser use case
            endpoints.ignore('FindUser') 
```

### Multiple Endpoints for the Same Use Case

It is possible to create multiple endpoints for the same use case. This is useful when it is necessary to use different HTTP methods or different paths for the same use case on the same version.

```javascript
    endpoints({ herbarium, controller }, {
        'v1': (endpoints) => {
            endpoints.for('SearchUser').use({
                method: 'GET'
            })

            endpoints.for('SearchUser', 'SearchUserEndpoint-v1-Alternative').use({
                method: 'POST'
            })
```

Because the endpoints are scoped in the same version, it will be necessary to provide a alternative ID for the second endpoint.

### Versioned Endpoints

It is possible to create versioned endpoints for the same use case. 

**For all use cases**

  This is useful when is necessary to version all endpoints.

  ```javascript
      endpoints({ herbarium, controller }, {
        'v1': (endpoints) => {
            endpoints.build()
        },
        'v2': (endpoints) => {
            endpoints.build()
        }
      })
  ```

**Single use case with multiple versions**

  This is useful when a use case changes but it is necessary to maintain old endpoints versions working.

  ```javascript
  const parametersHandler = (req, parameters) => {
    return {
      id: req.params.id,
      searchTerms: req.query.searchTerms,
    }
  }

  endpoints({ herbarium, controller }, {
        'v1': (endpoints) => {
            endpoints.for('SearchUser').use({
                method: 'POST',
                parametersHandler
            })
        },
        'v2': (endpoints) => {
            endpoints.build()
        }
  })

  // Generate the endpoints:
  // v1: POST /v1/users/search
  // v2: GET /v2/users/search  // default
  ```

:::tip
If your project uses multiple versions, it is recommended to use multiple files to organize the use cases. For example, `src/infra/api/rest/v1.js` and `src/infra/api/rest/v2.js`.
:::

### Custom Controller

It is possible to replace the default controller for a use case or for all use cases.

**Single use case**

    ```javascript
    function customController({ usecase, request, authorizationInfo, req, res, next, path, method }) {
      // Custom logic here
    }

    endpoints({ herbarium, controller }, {
      'v1': (endpoints) => {
          endpoints.for('SearchUser').use({
              controller: customController
          })
    ```

**For all use cases**

    ```javascript
    endpoints({ herbarium, controller: customController }, {
      'v1': (endpoints) => {
    ```

### Custom Parameters Handler

It is possible to replace the default parameters handler for a use case.

```javascript
function searchParametersHandler(req, parameters) {
    return { id: req.params.id, 
    name: req.body.name, 
    isActive: true // default }
}

endpoints({ herbarium, controller }, {
  'v1': (endpoints) => {
      endpoints.for('SearchUser').use({
          parametersHandler: searchParametersHandler
      })
```

Function description: `parametersHandler(req, parameters)`

- `req`: request object from express

- `parameters`: REST parameters metadata. Ex: `{ params: { id: Number }, body: { name: String } }`

The current default implementation also deal with type casting. Be aware that overriding the default implementation can break the type casting. The convetion has the function `.cast` to help with that.

### Custom Authorization Handler

**For all use cases**

It is possible to replace the default authorization handler for all use cases.

```javascript
function myAuthorizationHandler(req) {
    return req.authInfo
}

endpoints({ herbarium, controller, authorizationHandler: myAuthorizationHandler }, {
  'v1': (endpoints) => {
      ...
```

**For a single use case**

It is possible to replace the default authorization handler for a use case. It useful when it is necessary to use a different authorization mechanism for that specific use case.

```javascript
function myAuthorizationHandler(req) {
    return req.authInfo
}

endpoints({ herbarium, controller }, {
  'v1': (endpoints) => {
      endpoints.for('SearchUser').use({
          authorizationHandler: myAuthorizationHandler
      })
```

Function description: `authorizationHandler(req)`. The default will return `user` from the request object.

#### Legacy Version

For Herbs2REST legacy documentation, please refer to [Herbs2REST Legacy](/glues/herbs2rest-legacy.md)