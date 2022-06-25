---
id: features
title: Usecase Features
sidebar_label: Features
slug: /usecase/features
---

## Creating a Use Case

`usecase(description, body)`, where:

- `description`: use case description, capturing the use case intent.

- `body`: object containing the use case structure: request, response, setup, authorize and steps.

- return: a Herbs use case instance.

Example:

```javascript
const { Ok, Err, usecase, step, ifElse } = require('@herbsjs/herbs')
const createItem = usecase('Create Item', {
    ...
})
```

**Good descriptions:**

✅ Update User

✅ Reopen Ticket

✅ Request Report Generation

**Bad descriptions:**

❌ updateUsers

❌ Report Gen

## Authorizing and Running

**Authorizing**

`.authorize(user)`, where:

- `user`: string or object containing a user payload.

- return: `true` for authorized or `false` for unauthorized.

**Running**

`.run(request)`, where:

- `request`: object containing the request values.

- return: a result with an Ok or an Err.

Example:

```javascript
const usecase = createProduct()

const hasAccess = await usecase.authorize(req.user)
if (!hasAccess) {
    ...
    throw new ForbiddenError()
}

const request = { name: 'The best product' }
const response = await usecase.run(request)
```

## Request

First, a use case must define the request fields and its types. This information is used as metadata for Glues. It is also used to validate request payload before running the use case.

`{ request: fields }`, where:

- `fields`: object containing field names and types.

During the use case execution it is possible to read the request value using `ctx.req`.

For example:

```javascript
const updateItem = (injection) =>

    usecase('Update Item', {
        // Input/Request type validation
        request: {
            id: Number,
            description: String,
            isDone: Boolean,
            position: Number
        }

        'Retrieve the previous Item from the repository': step(async (ctx) => {
            const req = ctx.req // request values
            const ret = await repo.findByID(req.id)
            ...
        }),
```

As a validation example, when it's executed with an `id`, that is a string, the above use case return is:

```js
const request = { id: '1' }
const ret = await usecase.run(request)

// ret.err
// { request: [{ id :[{ wrongType: "Number" }] }] }
```

## Response

It is possible to define the response type as well. This information is used as metadata for glues but it is not validated when running the use case.

`{ response: type }`, where:

- `type`: response type.

A use case will run all the steps sequencially or until one of the steps return a `Err`. The [result](/docs/usecase/result) of a use case is set by the result of the last step executed.

The result value of a use case is set by `ctx.ret`. It is possible to set this variable any time at any step.

```javascript
const createProduct = injection =>
    usecase('Create Product', {

        request: {
            name: String,
            ...
        },

        response: {
            product: Product
        },

        'Check if the Product is valid': step(ctx => {
            ...
            if (!isValid) return Err(errors) // it stops the execution here and return a Err
            return Ok() // go to the next step
        }),

        'Save the Product on the repository': step(async ctx => {
            ...
            ctx.ret.product = await repo.insert(product) // set the return value
            return Ok() // last step and return Ok
        }),
```

## Request and Response Types

A field in a request or the response can be basic types from Javascript or entities:

`Number`: double-precision 64-bit binary format IEEE 754 value

`String`: a UTF‐16 character sequence

`Boolean`: true or false

`Date`: represents a single moment in time in a platform-independent format.

`Object`: the Object class represents one of JavaScript's data types.

`Array`: the Array class is a object that is used in the construction of arrays.

`Entity`: entity object represents an gotu base entity.

For array of a certain type use: `[type]`. Ex: `id: [Number]` or `items: [Item]`.

The validation will not validatate for presence, so `null` and `undefined` are accepted as valid values.

## Setup

Like a constructor, it is the first function to be executed before `authorize` and steps. Can be used to setup the dependency injection, for instance.

`{ setup: ctx => {} }`, where:

- `ctx`: execution context - internal object visible throughout the use case and steps execution

For example:

```javascript
const addOrUpdateItem = (injection) =>

    usecase('Add or Update an Item on a to-do List', {

        // Pre-run setup
        setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),
    ...
```

## Authorize

A function executed before any steps to make sure the user is authorized to run the use case.

`{ authorize: async (user) => {} }`, where:

- `user`: an object containing the user's information - this information will be audited.

- return: must return `Ok` for authorized and `Err` for unauthorized.

For example:

```javascript
const addOrUpdateItem = (injection) =>

    usecase('Add or Update an Item on a to-do List', {

        // Authorization with Audit
        authorize: async (user) => (user.canAddOrUpdateList ? Ok() : Err()),
    ...
```

## Context (ctx)

The `ctx` variable is used to access (read and write) the state of the use case and its steps during its execution.

For more details about context, check step context.

## Audit

`usecase.auditTrail`: Retrieve the audit trail of a use case after its execution.

```javascript
const request = { name: 'The best product' }
const response = await createProduct.run(request)
console.log(createProduct.auditTrail)
```

`process.env.HERBS_EXCEPTION = "audit"`: Recommended for **production environments** - Swallow and audit exceptions thrown during the use case execution. This will swallow the exceptions and return a Err on the step. If `process.env.HERBS_EXCEPTION` is not equal `audit` any exceptions thrown during a use case execution will be thrown.

Result sample:

```javascript
{
    // object type
    type: 'use case',

    // use case description
    description: 'Add or Update an Item on a to-do List',

    // unique Id for each use case execution
    transactionId: '9985fb70-f56d-466a-b466-e200d1d4848c',

    // total use case execution time in nanosecods
    elapsedTime: 1981800n,

    // the same user (object) provided on `usecase.authorize(user)`
    user: { name: 'John', id: '923b8b9a', isAdmin: true },

    // `usecase.authorize(user)` return
    authorized: true,

    // use case request
    request: { name: 'The best product' },

    // use case result
    return: {
        Ok: { item: { id: 100, name: 'Do not forget this', position: 9 } }
    },

    // steps
    steps: [
        {
            // object type
            type: 'step',

            // use ase description
            description: 'Check if the Item is valid',

            // total step execution time in nanosecods
            elapsedTime: 208201n ,

            // step result
            return: {}
        },
        ...
    ]
}
```

## Metadata

To access the metadata of a use case: `uc.doc()`

Example:

```javascript
const createProduct = injection =>
    usecase('Create Product', {

        request: {
            description: String,
        },

        response: {
            product: Product,
        },

        'Check if the Product is valid': step({

            'Validate Product origin': step(ctx => {
                return Ok()
            }),

            'Validate Product information': step(ctx => {
                return Ok()
            }),
        }),
    })

const uc = createProduct()

console.log(uc.doc())
// {
//     type: "use case",
//     description: "Create Product",
//     request: {
//         description: String
//     },
//     response: {
//         product: Product
//     },
//     steps: [{
//         type: "step",
//         description: "Check if the Product is valid",
//         steps: [{
//             type: "step",
//             description: "Validate Product origin",
//             steps: null
//         }, {
//             type: "step",
//             description: "Validate Product information",
//             steps: null
//         }]
//     }]
// }
```
