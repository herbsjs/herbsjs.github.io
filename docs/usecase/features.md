---
id: features
title: Features
sidebar_label: Features
slug: /usecase/features
---

## Creating a Use Case

`usecase(description, body)`, where:

- `description`: description of the use case, capturing the use case intent.

- `body`: object containing the use case structure: request, response, setup, authorize and steps.

- return: a Herbs use case instance.

Example:

```javascript
const { Ok, Err, usecase, step, ifElse } = require('buchu')
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

## Running a Use Case

`.run(request)`, where:

- `request`: object containing the request values.

- return: a result with an Ok or an Err.

Example:

```javascript
const request = { name: 'The best product' }
const response = await createProduct.run(request)
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

As a validation example, when executed with an `id` that is a string the above use case returns is:

```js
const request = { id: '1' }
const ret = await usecase.run(request)

// ret.err
// { request: [{ id :[{ wrongType: "Number" }] }] }
```

## Response

It is possible to define the response type as well. This information is used as metadata for Glues but it is not validated when running the use case.

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
        }

        'Check if the Product is valid': step(ctx => {
            ...
            if (!isValid) return Err(errors) // it stops the execution here and return a Err
            return Ok() // go to the next step
        }),

        'Save the Product on the repository': step(async ctx => {
            ...
            ctx.ret = await repo.insert(product) // set the return value
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


## Errors

The `Err` object permit you to return simple/custom/structured errors to presentation layer that can be used as metadata by our glues.

### Generic Error
This error is just an error that don'dt generate any metadata for presentation layer, so you will need to manager itself.

`usecase.js`
``` js
const createProduct = injection =>
    usecase('Create Product', {
        'Check if the Product is valid': step(ctx => {
            ...
            if (!isValid) return Err('My message or my object')
        }),
```
`presentation.js`
``` js
const result = usecase.run()
console.log(result.isErr) // true
console.log(result.err) // 'My message or my object'
```


### Structured Error
This error isn't only a structured error, but this will be useful to be used like an metadata into presentation layer or herbs's glues.

`usecase.js`
``` js
const createProduct = injection =>
    usecase('Create Product', {
        'Check if the Product is valid': step(ctx => {
            ...
            if (!isValid) {
                const options = { message: 'message', payload: { entity: 'product' }, cause: {foo: 'bar'} } // the cause can be anything, obj, Err, Error...
                return Err.notFound('My message or my object')
            }
        }),
```

`presentation.js`
``` js
const result = usecase.run()
console.log(result.isErr) // true
console.log(result.isNotFoundError) // true
console.log(result.err) // {
                //     payload: { entity: 'product' },
                //     cause: {foo: 'bar'},
                //     code: 'NOT_FOUND',
                //     message: 'message'
                //   }
```

### Structured Error list

All others structured Errors follow a similar same structure
``` js
let myErr = Err.notFound(options)
myErr.isNotFoundError // true
myErr.err.code // NOT_FOUND

myErr = Err.alreadyExists(options)
myErr.isAlreadyExistsError // true
myErr.err.code // ALREADY_EXISTS

myErr = Err.invalidEntity(options)
myErr.isInvalidEntityError // true
myErr.err.code // INVALID_ENTITY

myErr = Err.permissionDenied(options)
myErr.isPermissionDeniedError // true
myErr.err.code // PERMISSION_DENIED

myErr = Err.unknown(options)
myErr.isUnknownError // true
myErr.err.code // UNKNOWN

// the invalidArguments is the only structured error that receive a different option
myErr = Err.invalidArguments({ ...options, args: { name: 'cant be empty' }})
myErr.isInvalidArgumentsError // true
myErr.err.code // INVALID_ARGUMENTS

```

#### Custom structured error
If our structured error dont cover your scenario, you can build your own structured error
``` js
//Err.buildCustomErr(code, message, payload, cause, caller)
const err = Err.buildCustomErr('CUSTOM_ERR', 'message', { entity: 'user' }, {foo: 'bar'}, 'Custom')
err.isCustomError // true
err.err //{
        //     payload: { entity: 'user' },
        //     cause: {foo: 'bar'},
        //     code: 'CUSTOM_ERR',
        //     message: 'message'
        // })
```
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
    
    // use ase description
    description: 'Add or Update an Item on a to-do List',
    
    // unique Id for each use case execution
    transactionId: '9985fb70-f56d-466a-b466-e200d1d4848c', 
    
    // total use case execution time in nanosecods
    elapsedTime: 1981800n, 

    // the same user (object) provided on `usecase.authorize(user)`
    user: { name: 'John', id: '923b8b9a', isAdmin: true },

    // `usecase.authorize(user)` return
    authorized: true,

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

## Documentation

// TODO