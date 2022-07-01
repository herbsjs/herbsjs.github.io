---
id: herbs2rest
title: REST - Herbs2REST
sidebar_label: REST
slug: /glues/herbs2rest
---

Creates REST endpoints based on Herbs [entities](/docs/entity/getting-started) and [use cases](/docs/usecase/getting-started).


## Getting started
### Installing
```bash
$ npm install @herbsjs/herbs2rest
```
### Using

Use the method generateRoutes to generate api rest routes based on usecases.

Herbs2REST works with [express](https://expressjs.com/) in version [4.x](https://expressjs.com/en/4x/api.html).

#### Controller List

The method needs a list of controllers like the example below:

```javascript
const controllerList = [
  {
    name: 'lists',
    getAll: { usecase: require('../usecases/getLists'), controller: require('../controller') },
    getById: { usecase: require('../usecases/getLists'), id: 'listId' },
    post: { usecase: require('../usecases/createList') },
    put: { usecase: require('../usecases/updateList') },
    delete: { usecase: require('../usecases/deleteList') }
  }
]
```

The `name` field is the name of the route (Ex. *https://example.com/lists*)

| field | controller |
|---|---|
|`getAll`| `GET /{name}/`|
|`getById`| `GET /{name}/{id}`|
|`post`| `POST /{name}/`|
|`put`| `PUT /{name}/{id}`|
|`delete`| `DELETE /{name}/{id}`|

The `id` field is a string representing the id field in the use case request and can be used for `GetById`, `Put` and `Delete`. The default value is "*id*".

The `controller` field a function that replaces the default controller.

#### Custom Controller

To create a custom controller, it is necessary to follow this pattern.

```javascript
const controller = async (usecase, req, user, res, next) => {
  // Implementation
}
```

Each method parameter has different data:

- usecase: usecase in ([buchu](https://github.com/herbsjs/buchu)) pattern.
- req: body, query and params of route.
- user: parameter passed in the request.
- res: response object of [express](https://expressjs.com/).
- next: allows the next queued route handler/middleware to handle the request.

#### Generate Routes

Generating and using new express routes:

```javascript
const express = require('express')
const { generateRoutes } = require('@herbsjs/herbs2rest')

const app = express()
const routes = new express.Router()

generateRoutes(controllerList, routes, true)  // true = console info endpoints

app.use(routes)
```

#### HTTP Status Code and Err

Herbs2rest translates Herbs [Known Errors​](/docs/usecase/result#known-errors) to HTTP status code as described in the documentation.

#### Authorization

All use cases must implement the `authorize` method and receive a user for authentication if using the default controller.

Example:

```javascript
const { Ok, Err, usecase } = require('@herbsjs/herbs')

const testUseCase = (injection) =>
  usecase('Test UseCase', {
    authorize: async (user) => {
      if (user === 'admin')
        return Ok()
      else
        return Err('Invalid user')
    }
  })
```

---

#### Example

Additionally you can view a simple demo application of this library in [todolist-on-herbs](https://github.com/herbsjs/todolist-on-herbs).
