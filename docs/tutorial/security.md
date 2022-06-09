---
id: security
title: 10. Security and Auditing
sidebar_label: 10. Security and Auditing
slug: /tutorial/security
---

## Authorizing

In every use case, you can set up the `authorize` which gets a `user` object and must return `Ok` for authorized and `Err` for unauthorized.

It is simple like that, you can implement any logic and if `Ok` were returned the use case keep running, but if `Err` were returned, the use case is interrupted.

```js
const createUser = () => usecase('Create User', {
    // Input/Request metadata and validation 
    request: {
        nickname: String,
        password: String
    },

    // Output/Response metadata
    response: User,

    // Authorization with Audit
    authorize: async (user) => (user.canCreateUser ? Ok() : Err()),
    ...
```

> Learn more about [Authorize with HerbsJS](../usecase/features#authorize).

## Auditing

You can retrieve useful information about a use case execution with `usecase.auditTrail`.

```js
const request = { name: 'The best product' }

// Run the use case
const response = await createProduct.run(request)

// Log their information
console.log(createProduct.auditTrail)
```

```json
{
    // object type
    type: 'use case',
    
    // use ase description
    description: 'Create User',
    
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
        Ok: { id: 1, nickname: 'created_user', password: 's3cr37' }
    },

    // steps
    steps: [
        { 
            // object type
            type: 'step', 
            
            // use ase description
            description: 'Check if the User is valid', 
            
            // total step execution time in nanosecods
            elapsedTime: 208201n , 
            
            // step result
            return: {} 
        },
        ...
    ]
}
```

> Refer to [Audit with HerbsJS](../usecase/features#audit) to know more.

## Generate a use case self documentation

You can also use `uc.doc()` to get an Object like this:

```json
{
  type: 'use case',
  description: 'Create User',
  request: { nickname: String, password: String },
  response: User,
  steps: [
    { type: 'step', description: 'Check if the User is valid', steps: null },
  ]
}
```
