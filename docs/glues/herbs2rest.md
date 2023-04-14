---
id: herbs2rest
title: REST - Herbs2REST
sidebar_label: REST
slug: /glues/herbs2rest
---

Herbs2REST is a powerful library that generates REST endpoints using the metadata from use cases. Save time and effort by automating endpoint creation while maintaining the ability to customize the REST API as needed.

# Installation

- If the project will be created with the Herbs CLI, choose 'Yes' when prompted for the REST option.

- Otherwise, install the package using the following command:

```bash
npm install @herbsjs/herbs2rest
```


# Usage
## Basic Usage

Follow these three steps to get started with Herbs2REST:

1. Prepare the use cases metadata to override the default behavior (if desired)

    ```javascript
    herbarium.usecases.get('SearchUser').metadata({ REST: [{ method: 'GET' }] })
    ```

    The above example will override the default method for the SearchUser use case to use the GET method.

2. Populate the metadata for each use case

    ```javascript
    populateMetadata({ herbarium, controller, version: 'v1' })
    ```

    This step populates metadata such as `version`, `resource`, `method`, `path`, `parameters`, `parametersHandler`, `authorizationHandler`, and `controller` for all use cases in the `herbarium`.

3. Generate the endpoints based on the metadata:

    ```javascript
    generateEndpoints({ herbarium, server })
    ```

    Where `server` is an Express server or router.

    Herbs2REST will create Express endpoints according to the provided metadata.


Example output:

```
GET /v1/users/search
```

## From Metadata to REST Endpoint

Herbs2REST populates the REST metadata of each use case with the necessary information to create endpoints applying conventions and reading metadata from the domain (use cases, entities, etc.) and from infrastructure (`REST` metadata, when overriding the default behavior). 

`populateMetadata` is able to populate the metadata for all use cases with no additional configuration. However, it is possible to override the metadata for each use case before using `populateMetadata`.

```javascript
herbarium.usecases.get('SearchUser').metadata({ REST: [{ method: 'GET' }] })
```

REST metadata:

- `version`: String (e.g., 'v1'). This is used to create the final path.

    Example: `/v1/users/search`

- `method`: String. HTTP method (`GET`, `POST`, `PUT`, `DELETE`, etc.).

    Example: `GET /v1/users/search`

- `resource`: String. Resource name (e.g., 'search'). This is used to create the final path.

    Example: `/v1/search/user`

- `parameters`: These are used to create the final path if applicable.

    Example: `{ params: { id: 'id' }, query: { name: 'name' } }`

    Parameters source: `params`, `query`, `body`, `headers`, `cookies`, etc.

- `path`: String. The final path. If this is provided, other metadata will be ignored.

    Example: `/v1/custom/search/user`

- `parametersHandler`: Function `parametersHandler(req, parameters)`. Extract parameters from the request using the corresponding source and cast them to the corresponding type.

    Example:

    ```javascript
    function customParametersHandler(req, parameters) {
      return {
        id: req.params.id,
        name: req.body.name,
      }
    }

    herbarium.usecases.get('SearchUser').metadata({ REST: [{ parametersHandler: customParametersHandler }] })
    ```

- `controller`: Function `controller({ usecase, request, authorizationInfo, res, next })`. Replace the default controller.

    Example:

    ```javascript
    function customController({ usecase, request, authorizationInfo, res, next }) {
      // Custom logic here
    }

    herbarium.usecases.get('SearchUser').metadata({ REST: [{ controller: customController }] })
    ```

- `authorizationHandler`: Function `authorizationHandler(req)`. Extract authorization information from the request.

    Example:

    ```javascript
    function customAuthorizationHandler(req) {
      return {
        user: req.user,
      }
    }

    herbarium.usecases.get('SearchUser').metadata({ REST: [{ authorizationHandler: customAuthorizationHandler }] })
    ```

## Conventions

### Path Conventions

The default path convention is based on the use case metadata and can be overridden if necessary.

The default path convention is: `/{version}/{resource}/{parameters}`

The `resource` name convention takes into account the entity name and the use case group. If no entity is defined, it will use the use case group.

### Parameters Convention

The parameters convention is based on the metadata of the request from the use case and fields from the entity linked to the use case, plus the HTTP method.

Herbs2REST will use the use case and entity to create the parameters metadata.

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

Without the entity metadata, it would not be possible to know which field is the ID.

## Advanced Scenarios

### Multiple Endpoints for the Same Use Case

It is possible to create multiple endpoints for the same use case. This is useful when it is necessary to use different HTTP methods or different paths for the same use case.

```javascript
herbarium.usecases.get('SearchUser').metadata({ REST: [{ method: 'GET' }, { method: 'POST' }] })
```

### Versioned Endpoints

It is possible to create versioned endpoints for the same use case. 

- Single use case with multiple versions:

    This is useful when a use case changes but it is necessary to maintain old endpoints versions working.

    ```javascript
    const parametersHandler = (req, parameters) => {
      return {
        id: req.params.id,
        searchTerms: req.query.searchTerms,
      }
    }

    herbarium.usecases.get('SearchUser').metadata({ REST: [
      { version: 'v1', parametersHandler, method: 'POST' }, 
      { version: 'v2' } // use the defaults 
    ]})

    // Generate the endpoints:
    // v1: POST /v1/users/search
    // v2: GET /v2/users/search
    ```

:::tip
If your project uses multiple versions, it is recommended to use multiple files to organize the use cases. For example, `src/infra/api/rest/v1.js` and `src/infra/api/rest/v2.js`.
:::

- For all use cases

    This is useful when is necessary to version all endpoints.

    ```javascript
    populateMetadata({ herbarium, controller, version: 'v1' })
    populateMetadata({ herbarium, controller, version: 'v2' })
    ```

It is possible to use both methods together: override the specifics and use the default behavior for the rest.

### Custom Controller

It is possible to replace the default controller for a use case or for all use cases.

- Single use case

    ```javascript
    herbarium.usecases.get('SearchUser').metadata({ REST: [{ controller: customController }] })
    ```

- For all use cases

    ```javascript
    populateMetadata({ herbarium, controller: customController })
    ```

### Custom Parameters Handler

It is possible to replace the default parameters handler for a use case.

```javascript
function searchParametersHandler(req, parameters) {
    return { id: req.params.id, 
    name: req.body.name, 
    isActive: true // default }
}

herbarium.usecases.get('SearchUser').metadata({ REST: [{ parametersHandler: searchParametersHandler }] })
```

Function description: `parametersHandler(req, parameters)`

- `req`: request object from express

- `parameters`: REST parameters metadata. Ex: `{ params: { id: Number }, body: { name: String } }`

The current default implementation also deal with type casting. Be aware that overriding the default implementation can break the type casting. The convetion has the function `parametersCast` to help with that.

### Custom Authorization Handler

It is possible to replace the default authorization handler for a use case. It useful when it is necessary to use a different authorization mechanism for that specific use case.

```javascript
function myAuthorizationHandler(req) {
    return req.user
}

herbarium.usecases.get('SearchUser').metadata({ REST: [{ authorizationHandler: myAuthorizationHandler }] })
```

Function description: `authorizationHandler(req)`. The default will return `authInfo` from the request object.

### Custom Convention

It is possible to replace the default convention for all use cases.

- Populate metadata with custom convention

  ```javascript
  const convention = Object.assign({}, populateMetadata.convention)
  convention.toPlural = (name) => {
      if (name.endsWith('e')) return name + 'n'
      return name + 'en'
  }
  populateMetadata({ herbarium, controller, version: 'v1', convention })
  ```

  Conventions:
  - `parametersHandler`: function `parametersHandler(req, parameters)` - Extract parameters from request using the corresponding source and cast them to the corresponding type. 
  - `parametersCast`: function `parametersCast(value, type)` - Cast request parameters (string) to the corresponding type. 
  - `operationToMethod`: function `operationToMethod({ operation })` - Convert CRUD operation to HTTP method. 
  - `toResourceName`: function `toResourceName({ entity, group })` - Apply convention to convert entity name or group name to resource name. 
  - `toPlural`: function `toPlural(name)` - Apply convention to convert name to plural. 
  - `methodToPath`: function `methodToPath({ method, resource, parameters })` - Convert HTTP method and CRUD operation to path. 
  - `requestToParameters`: function `requestToParameters({ method, entity, request })` - Extract parameters from use case request and entity fields. 

#### Legacy Version

For Herbs2REST legacy documentation, please refer to [Herbs2REST Legacy](/glues/herbs2rest-legacy.md)