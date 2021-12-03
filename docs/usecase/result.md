---
id: result
title: Result
sidebar_label: Result
slug: /usecase/result
---

The result instances indicate whether the execution of a function was successful or not. `Ok(value)` representing success and containing a `value`, and `Err(error)`, representing error and containing an `error` value.

For exemple:
```js
const createList = usecase('Create List', {

    'Check if the List is valid': step(ctx => {
        ...
        if (!list.isValid()) return Err(list.errors)
        return Ok()
    }),
```

To consume the information:

```javascript
/* Execution */
const request = { ... }
const response = await createList.run(request)

/* Response */
if (response.isErr)
    throw new ResponseError(null, { invalidArgs: response.err }) 
    // Or any other behavior for error response
    
return response.ok // response.ok has the returned value
```

Results are an important run-time metadata to inform glues about the execution of a use case.

**Common Result Methods**

`result.isOk`: returns if the result is `Ok`.

`result.isErr`: returns if the result is `Err`.

`result.toString()`: returns the string representation of the result.

`result.toJSON()`: returns the JSON representation of the result.

## Ok

`Ok(value)`, where:

- `value`: success value.

- return: `Ok` instance.

`result.ok`: returns the success value.

## Err

`Err(error)`, where:

- `error`: error value.

- return: `Err` instance.

`result.err`: returns the error value.


### Generic Errors

A generic error is a simple object that signals that an error or alternative path has occurred. Because it doesn't carry extra metadata with it, the consuming layers can check the result as an error but not what it means.

`usecase.js`
``` js
const createProduct = injection =>
    usecase('Create Product', {
        'Check if the Product is valid': step(ctx => {
            ...
            if (!isValid) return Err('My message or my object')
        }),
```
`consumer.js`
``` js
const result = usecase.run()
console.log(result.isErr) // true
console.log(result.err) // 'My message or my object'
```

### Known Errors

For the result of a use case to be even richer in metadata, there are **known errors**. These errors carry extra metadata that helps the consumer layers make better decisions.

Ex:

`usecase.js`
``` js
const createProduct = injection =>
    usecase('Create Product', {
        'Check if the Product is valid': step(ctx => {
            ...
            if (!isValid) {
                const options = { message: `Product ID ${id} not found`, payload: { entity: 'product' } }
                return Err.notFound(options) // return an Err with "not found" code
            }
        }),
```

`consumer.js`
``` js
const result = usecase.run()
console.log(result.isErr) // true
console.log(result.isNotFoundError) // true
console.log(result.err) // {
                //     payload: { entity: 'product' },
                //     code: 'NOT_FOUND',
                //     message: `Product ID ${id} not found`
                //   }
```

**Known Error List**

This is the list with all **known errors** and the expected behavior for the consumer layer:

Result | Check | HTTP / REST | GraphQL (Apollo) | gRPC  |
-------|-------------|-------------|------------------|--------
Ok() | ret.isOk | 200 - Ok | | OK
Err.invalidArguments(options, args) | ret.isInvalidArgumentsError | 400 - Bad Request | BAD_USER_INPUT | INVALID_ARGUMENT
Err.permissionDenied(options) | ret.isPermissionDeniedError | 403 - Forbidden |  FORBIDDEN | PERMISSION_DENIED
Err.notFound(options) | ret.isNotFoundError | 404 - Not Found | (BAD_USER_INPUT) | NOT_FOUND
Err.alreadyExists(options) | ret.isAlreadyExistsError | 409 - Conflict | (BAD_USER_INPUT) | ALREADY_EXISTS
Err.invalidEntity(options) | ret.isInvalidEntityError | 422 - Unprocessable Entity | (BAD_USER_INPUT) | INVALID_ARGUMENT
Err.unknown(options) | ret.isUnknownError | 500 - Internal Server Error | INTERNAL_SERVER_ERROR | UNKNOWN / INTERNAL

The `options` paramethers are:

`message`: `String` - Optional. Free message text, preferably explaining the error in a short way.

`payload`: `Object` - Optional. Any object that helps give more context to the error for the consuming layers.

`cause`: `Object` - Optional. An Err or Exception that gives context about the cause of the error.


**Custom error**

If the current list of known error doesn't cover your scenarios, you can build your own custom error. 

Ex:
``` js
//Err.buildCustomErr(code, message, payload, cause, caller)
const err = Err.buildCustomErr('PRODUCT_ERR', 'message', { entity: 'product' }, Err(), 'Product')
err.isProductError // true
err.err //{
        //     payload: { entity: 'product' },
        //     cause: Err(),
        //     code: 'PRODUCT_ERR',
        //     message: 'message'
        // })
```