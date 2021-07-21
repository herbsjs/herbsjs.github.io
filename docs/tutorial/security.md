---
id: security
title: 8. Security and Auditing
sidebar_label: 8. Security and Auditing
slug: /tutotial/security
---

## Authorizing

In every usecase, you can set up the `authorize` which get an `user` object and must return `Ok` for authorized and `Err` for unauthorized.

Is simple like that, you can implement any logic and if `Ok` were returned the usecase keep running, but if `Err` were returned, the usecase is interrupted.

```js
const addOrUpdateItem = (injection) =>

    usecase('Add or Update an Item on a to-do List', {

        // Authorization with Audit
        authorize: async (user) => (user.canAddOrUpdateList ? Ok() : Err()),
    ...
```

> Learn more about [Authorize with HerbsJS](../usecase/features#authorize).

## Auditing

You can retrieve useful information about an usecase execution with `usecase.auditTrail`.

```js
const request = { name: 'The best product' }

// Run the usecase
const response = await createProduct.run(request)

// Log their information
console.log(createProduct.auditTrail)
```

```json
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

> Refer to [Audit with HerbsJS](../usecase/features#audit) to know more.
