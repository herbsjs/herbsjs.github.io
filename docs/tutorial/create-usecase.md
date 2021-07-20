---
id: create-usecase
title: 4. Creating Use Cases
sidebar_label: 4. Creating Use Cases
slug: /tutotial/create-usecase
---

With the entities set properly, we can start to use them. For this, we have to set the usecases for the app.

> Lear more: [What's a Use Case?](/docs/usecase/getting-started#whats-a-use-case)

## Create List Use Case

Let's develop a usecase to create a list.

> Know more about [create usecases](/docs/usecase/features#creating-a-use-case).

### Use Case Name

First, we are going to set the name for the usecase.

```js
// usecases/list/createList.js
const { usecase } = require('@herbsjs/herbs')

const createList = injection => usecase('Create List', {})
```

### Request

Now, we have to specify what is the data we want from the user in the request.
In this case, we need the name of the list, which is a `String`.

```js
// usecases/list/createList.js
const { usecase } = require('@herbsjs/herbs')

const createList = injection => usecase('Create List', {
    // Input/Request metadata and validation 
    request: { name: String },
})
```

Here we can use the same validation contraints from the entity setup.

### Response

Once we have the request object specified, we must specify the response model.
In this case, we will return a List.

```js
// usecases/list/createList.js
const { usecase } = require('@herbsjs/herbs')
const { List } = require('../entities/list')

const createList = injection => usecase('Create List', {
    // Input/Request metadata and validation 
    request: { name: String },

    // Output/Response metadata
    response: List,
})
```

### Setup / DI

In each step of the usecase (which we are going to set soon), a context object is provided to handle the "data sharing" between different steps. And other useful data, such as repositories, the request values, etc.

On the `setup` function, we can manually add values to this context so we can use them later in the steps.

Here, we are going to insert a `dependency` object in the context, with the `ListRepository`:

```js
// usecases/list/createList.js
const { usecase } = require('@herbsjs/herbs')
const { List } = require('../entities/list')

const dependency = {
    ListRepository: require('../../infra/repositories/.../listRepository'),
}

const createList = injection => usecase('Create List', {
    // Input/Request metadata and validation 
    request: { name: String },

    // Output/Response metadata
    response: List,

    // Pre-run setup
    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),
})
```

### Authorize

Use cases may also have a `authorize` function, which can be implemented with any logic and must return `Ok()` if user is authorized to perform that operation and `Err()` otherwise.

In this case we gonna suppose that the `user` object has a property called `canCreateList`.

```js
// usecases/list/createList.js
const { Ok, Err, usecase } = require('@herbsjs/herbs')
const { List } = require('../entities/list')

const dependency = {
    ListRepository: require('../../infra/repositories/.../listRepository'),
}

const createList = injection => usecase('Create List', {
    // Input/Request metadata and validation 
    request: { name: String },

    // Output/Response metadata
    response: List,

    // Pre-run setup
    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    // Authorization with Audit
    authorize: async (user) => (user.canCreateList ? Ok() : Err()),
})
```

### Steps

Since we have the request, response, setup and authorization set, we can finally start writing the actual logic in the steps.

```js
// usecases/list/createList.js
const { Ok, Err, usecase } = require('@herbsjs/herbs')
const { List } = require('../entities/list')

const dependency = {
    ListRepository: require('../../infra/repositories/.../listRepository'),
}

const createList = injection => usecase('Create List', {
    // Input/Request metadata and validation 
    request: { name: String },

    // Output/Response metadata
    response: List,

    // Pre-run setup
    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    // Authorization with Audit
    authorize: async (user) => (user.canCreateList ? Ok() : Err()),

    'Check if the List is valid': step(ctx => {
        // Instanciate a new list and put this
        // to the context.
        const list = ctx.list = new List()

        // Set a random ID to it.
        list.id = Math.floor(Math.random() * 100000)

        // Set the name for the list with the
        // value from request.
        list.name = ctx.req.name

        // Validate the list values.
        // If they were invalid, return the errors.
        // So the next step will not run.
        if (!list.isValid()) return Err(list.errors)

        // If they were valid, return Ok()
        // So the next step will run.
        return Ok()
    }),

    'Save the List': step(async ctx => {
        const repo = new ctx.di.ListRepository(injection)

        // Insert the new list to the repository
        // and then return it to the client using
        // the `ret` property of context object.
        return (ctx.ret = await repo.insert(ctx.list))
    }),
})
```

> Learn more about [usecase steps](/docs/usecase/steps).
