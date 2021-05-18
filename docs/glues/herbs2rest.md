---
id: herbs2rest
title: Herbs2Rest
sidebar_label: Herbs2Rest
slug: /glues/herbs2rest
---

Create a REST API based on herbs entities ([gotu](https://github.com/herbsjs/gotu)) and usecases ([buchu](https://github.com/herbsjs/buchu)).


## Getting started
### Installing

    $ npm install herbs2rest

### Using

Use the method generateRoutes to generate api rest routes based on usecases.

herbs2rest works with [express](https://expressjs.com/) in version [4.x](https://expressjs.com/en/4x/api.html).

#### Controller List

The method needs a list of controllers like the example below:

```javascript
const controllerList = [
  {
    name: 'lists',
    idParameter: 'listId',
    getAll: require('../usecases/getLists'),
    getById: require('../usecases/getLists'),
    post: require('../usecases/createList'),
    put: require('../usecases/updateList'),
    delete: require('../usecases/deleteList')
  }
]
```

The `name` field is the name of the route (Ex. *https://example.com/lists*)

The `idParameter` field is the param's custom name of the route (GetById, Put and Delete), if the field does not exist, the parameter name will be "*id*".

The other fields refer to http methods using usecases (GetAll, GetById, Post, Put and Delete).

#### Generate Routes

Generating and using new express routes:

```javascript
const express = require('express')
const { generateRoutes } = require('herbs2rest')

const app = express()
const routes = new express.Router()

generateRoutes(controllerList, routes)

app.use(routes)
```

#### Authorization

All usecases need to implement the `authorize` method and receive a user for authentication..

Example:

```javascript
const { Ok, Err, usecase } = require('buchu')

const testUseCase = (injection) =>
  usecase('Test UseCase', {
    authorize: (user) => {
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

## How to contribute

If you would like to help contribute to this repository, please see [CONTRIBUTING](https://github.com/herbsjs/herbs2rest/blob/master/.github/CONTRIBUTING.md)

---

### License

- [MIT License](https://github.com/herbsjs/herbs2rest/blob/master/LICENSE)
