---
id: steps
title: Steps
sidebar_label: Steps
slug: /usecase/steps
---

Steps are the building blocks of a use case. Their main goal is to generate metadata before and during the execution of a use case like the code intention, audit trail, etc.

## The Basics

To create a step inside a use case is simple:

1. Define your step intention. 

2. Wrap your code with the `step` function passing the `ctx` argument. 

3. Don't forget to return the [result](/docs/usecase/result).

```javascript
const { Ok, Err, usecase, step } = require('@herbsjs/herbs')

const createProduct = injection =>
    usecase('Create Product', {

        'Check if the Product is valid': step(ctx => {
            return Ok() 
        }),
        ...
```

We think a code must define its [intention](/docs/project/motivation#code-intention) to make it easier to read as well as changing it.

So, the first thing to note is that we encourage the description of the steps with the business intent (never the technical intent).

**Good descriptions:**

✅ Check if the Product is valid

✅ Retrieve all Users from repository

✅ Calculate Customer position on the Queue

**Bad descriptions:**

❌ Select rows from MySQL

❌ getAllUsers

❌ Calc Position


## Nested Steps

It is possible to break your step into smaller steps using nested steps.

```javascript
const createProduct = injection =>
    usecase('Create Product', {

        'Check if the Product is valid': step({

            'Validate Product origin': step(ctx => { 
                return Ok() 
            }),

            'Validate Product information': step(ctx => { 
                return Ok() 
            }),
            ...
        }),
```

## If / Then / Else

With `ifElse` step it is possible create a conditional flow for a use case. 

💡 **Should I use `ifElse` step or a simple `if` statement on my code?**

Use `ifElse` when there is a fork in the business rule flow, thus capturing and documenting these rules. For other cases, use the `if` statement

```javascript
'[conditional flow description]': ifElse({

    '[if description]': step(ctx => {
        return Ok(conditional) // true or false
    }),

    '[then description]': step(ctx => {
        ...
        return Ok()
    }),

    '[else description]': step(ctx => {
        ...
        return Ok()
    }),
}),

```

For example:


```javascript
const { Ok, Err, usecase, step, ifElse } = require('@herbsjs/herbs')

const updateItem = (injection) =>
  usecase('Update Task', {

    ...
    
    'Check if is necessary to update Task positions': ifElse({

      'If position has changed': step(ctx => {
        return Ok(ctx.hasChangedPosition) // true or false
      }),

      'Then rearrange positions and save Tasks on repository': step(async ctx => {
        ...
        return Ok()
      }),

      'Else save updated Task on repository': step(async ctx => {
        ...
        return Ok()
      }),

    }),

```

## Step Context (ctx)

The `ctx` variable is used to access (read and write) the state of the use case and its steps during its execution.

For instance, to read and write a variable across multiple steps:

```javascript
const updateUser = injection =>
    usecase('Update User', {

        'Retrieve User from repository': step(async ctx => {
            ...
            const id = ctx.req.id // read id from request
            ctx.user = await repo.findByID(...) // create `user` variable
        }),

        'Update User on repository': step(ctx => {
            const user = ctx.user // read `user` variable
            ...
            ctx.ret = user // set the use case return

            return Ok(user)  // set the step return (for audit only)
        }),
    })
```

There are a few reserved variables inside `ctx`:

`ctx.req` - Contains the use case request payload. Declared when running a use case.

`ctx.ret` - Defines the use case result value.

`ctx.stop()` -  Informs that the current step will be the last to be executed in the use case context, regardless the step result (Ok or Err).


```javascript
const moveList = injection =>
    usecase('Move List', {

        'Move List position': step(async ctx => {
            ...
            if (last) ctx.stop() // use case execution will stop at this step.
            return Ok() 
        }),
        ...
    })
```

## Step Result

The result (`Ok` or `Err`) of a step is defined by the function returns. 

For exambple, `Ok` with value:
```javascript
    usecase('Create Product', {

        'Check if the Product is valid': step(ctx => {
            return Ok(isProductValid) 
        }),
        ...
```

The use case will stop its execution if the result of a step is `Err`.

```javascript
    usecase('Create Product', {

        'Check if the Product is valid': step(ctx => {
            if (!isProductValid) return Err(whyIsNotValid) // stop here
            return Ok(isProductValid)  // next step
        }),
        ...
```

If defined, like the example above, the value of the result will be audited.

The default result is `Ok` if no explicit result is returned.