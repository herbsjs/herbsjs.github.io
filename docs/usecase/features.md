---
id: features
title: Features
sidebar_label: Features
slug: /usecase/features
---

### Audit

It is possible to retrieve the audit trail of an use case after its execution

`uc.auditTrail`:

```javascript
{
    type: 'use case',
    description: 'Add or Update an Item on a to-do List',
    transactionId: '9985fb70-f56d-466a-b466-e200d1d4848c',
    elapsedTime: 1981800n, // in nanosecods
    user: { name: 'John', id: '923b8b9a', isAdmin: true },
    authorized: true,
    return: {
        Ok: { item: { id: 100, name: 'Do not forget this', position: 9 } }
    },
    steps: [
        { type: 'step', description: 'Check if the Item is valid', elapsedTime: 208201n , return: {} },
        { type: 'step', description: 'Check if the List exists', elapsedTime: 114300n , return: {}  },
        {
            type: 'if else', 
            description: 'Add or Update the Item',
            returnIf: { Ok: true },
            returnThen: {}
        }
    ]
}
```
TIP: If you need to audit the exceptions thrown by the use case use `process.env.HERBS_EXCEPTION = "audit"`. This will swallow the exceptions and return a Err on the step. Recommended for production environments.

### Request Validation

A request can be validated against the field's type.

```javascript
const addOrUpdateItem = (injection) =>

    usecase('Add or Update an Item on a to-do List', {

        // Input/Request type validation 
        request: { listId: Number, item: Object },

    ...
```
#### Request types

A field in a request can be basic types from Javascript or entities created from gotu herbs lib:

`Number`: double-precision 64-bit binary format IEEE 754 value

`String`: a UTF‐16 character sequence

`Boolean`: true or false

`Date`: represents a single moment in time in a platform-independent format.

`Object`: the Object class represents one of JavaScript's data types.

`Array`: the Array class is a object that is used in the construction of arrays.

`Entity`: entity object represents an gotu base entity.