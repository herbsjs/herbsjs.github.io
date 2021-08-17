---
id: gettingStarted
title: Getting Started with Usecases
sidebar_label: Getting Started
slug: /usecase/getting-started
---

## What's a Use Case?

Conceptually, a use case reflects a single action exposed by the Domain to the end user.

For exemple: _Reopen Ticket_, _Reply Message_, _Add User_

Internally a use case is responsible to control the interaction between entities, repositories and other domain components.

From Clean Architecture book: "Use cases orchestrate the flow of data to and from the entities, and direct those entities to use their Critical Business Rules to achieve the goals of the use case." 


## Installing

```
npm install @herbsjs/herbs
```

## Using

This is an example of how to set up a use case for creating a list (entity):

`usecases/list/createList.js`:

```javascript
const { usecase, step, Ok, Err } = require('@herbsjs/herbs')
const { TodoList } = require('../entities/todoList')
const dependency = {}

module.exports.createList = injection =>
  usecase('Create List', {
    // Input/Request metadata and validation 
    request: { name: String },

    // Output/Response metadata
    response: TodoList,

    // Pre-run setup
    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    // Authorization with Audit
    authorize: async (user) => (user.canCreateList ? Ok() : Err()),

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

## Best Pratices for a Use Case

- Be modeled around business domain
- Focused on value
- Keep it simple by telling stories / flows (steps)
- Be reusable
- Be testable
- Have clear acceptance criteria
- Use Ubiquitous language
- Avoid implement field __validations__ using use cases. Prefer Entities for that.
- Enforce that use cases are the only entry point to your Domain

**References**

- [Clean Architecture book](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)
- [Service Layer](https://martinfowler.com/eaaCatalog/serviceLayer.html)
- [Command Pattern](https://refactoring.guru/design-patterns/command)
- [Use Case 2.0](https://www.ivarjacobson.com/sites/default/files/field_iji_file/article/use-case_2.0_final_rev3.pdf)
- [Use Case diagram](http://www.agilemodeling.com/artifacts/useCaseDiagram.htm)

## Running

Use cases are likely to be called and audited indirectly by a [Glue](/docs/glues). But for didactic purposes or advanced scenarios, this is how to run and audit a use case:

1. Check if the user has authorization to run this use case

```javascript
/* Authorization */
const hasAccess = await usecase.authorize(user)
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