---
id: features
title: Features
sidebar_label: Features
slug: /usecase/features
---

## Create a Use Case

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

## Running a Use Case

`.run(request)`, where:

- `request`: object containing the request values.

- return: a result with an Ok or an Err.

Example:

```javascript
const request = { name: 'The best list' }
const response = await createItem.run(request)
```

## Request

Defines the request fields and its types. This information is used as metadata for Glues. It is also used to validate request payload before running the use case.

`{ request: fields }`, where:

- `fields`: object containing field names and types.

For example:

```javascript
const addOrUpdateItem = (injection) =>

    usecase('Add or Update an Item on a to-do List', {

        // Input/Request type validation 
        request: { listId: Number, item: Object },

    ...
```

For intance, when executed with an id that is a string the above use case returns is:

```js
const response = await usecase.run({ listId: '1' })

// response.err
// { request: [{ listId :[{ wrongType: "Number" }] }] }
```

## Response

Defines the response type. This information is used as metadata for Glues. It is not validated when running the use case.

`{ response: type }`, where:

- `type`: response type.

For example:

```javascript
const addOrUpdateItem = (injection) =>

    usecase('Add or Update an Item on a to-do List', {

        // Output/Response metadata
        response: [Items],
    ...
```

## Request and Response types

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

## Setup / DI

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

`{ authorize: user => {} }`, where:

- `user`: an object containing the user's information - this information will be audited.

- return: must return `Ok` for authorized and `Err` for unauthorized.

For example:

```javascript
const addOrUpdateItem = (injection) =>

    usecase('Add or Update an Item on a to-do List', {

        // Authorization with Audit
        authorize: user => (user.canAddOrUpdateList ? Ok() : Err()),
    ...
```

## Use Case Return (ctx.ret)

// TODO

## Audit

`uc.auditTrail`: Retrieve the audit trail of a use case after its execution.

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