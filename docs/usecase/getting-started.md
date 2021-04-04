---
id: gettingStarted
title: Getting started
sidebar_label: Getting started
slug: /usecase/getting-started
---

## Installing

```$ npm install buchu```

## Using

This is an example of how to set up a use case for creating a list (entity):

`usecases/list/createList.js`:

```javascript
const { usecase, step, Ok, Err } = require('buchu')

module.exports.createList = injection =>
  usecase('Create List', {
    // Input/Request metadata and validation 
    request: { name: String },

    // Output/Response metadata
    response: TodoList,

    // Pre-run setup
    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    // Authorization with Audit
    authorize: user => (user.canCreateList ? Ok() : Err()),

    // Step description and function
    'Check if the List is valid': step(ctx => {
      const list = ctx.list = new TodoList()
      list.id = Math.floor(Math.random() * 100000)
      list.name = ctx.req.name

      if (!list.isValid()) return Err(list.errors)
      return Ok() // returning Ok continues to the next step. Err stops the use case execution.
    }),

    'Save the List': step(async ctx => {
      const repo = new ctx.di.ListRepository(injection)
      return (ctx.ret = await repo.insert(ctx.list)) // ctx.ret is the Use Case return
    }),
  })
```

## Running

Use cases are likely to be called and audited indirectly by a [Glue](/docs/glues). But for didactic purposes or advanced scenarios, this is how to run and audit a use case:

1. Check if the user has authorization to run this use case

```javascript
/* Authorization */
const hasAccess = usecase.authorize(user)
if (hasAccess === false) {
    console.info(usecase.auditTrail)
    throw new ForbiddenError() // Or any other behavior for a unauthorized user
}
```

2. Prepare your request object and call the `.run()` function.

```javascript

/* Execution */
const request = { name: 'The best list' }
const response = await usecase.run(request)

```

3. Audit the execution 

```javascript

/* Audit */
console.info(usecase.auditTrail)
/*
{
    type: 'use case',
    description: 'Create List',
    authorized: true,
    steps: (2) [{…}, {…}],
    transactionId: '2bbc60d6-7843-4667-8732-341c22bae42e',
    elapsedTime: 172811500n,
    return: {Ok: {…}},
    user: { canCreateList: true }
}
*/

```

4. Check if the use case execution returned an error or success

```javascript

/* Response */
if (response.isErr)
    throw new ResponseError(null, { invalidArgs: response.err }) 
    // Or any other behavior for error response
return response.ok // response.ok has the returned value
```