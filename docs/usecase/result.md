---
id: result
title: Result
sidebar_label: Result
slug: /usecase/result
---

## Result

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

Results are a important run-time metadata to inform Glues about the execution of a use case.

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