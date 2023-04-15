---
id: development
title: Development Best Practices
sidebar_label: Development Best Practices
slug: /project/development-guides
custom_edit_url: null
---

## Defining the name of your usecase

The name of the usecase must be something that refers to the business, making its real purpose clear to the business team.



**Good descriptions:**

✅ Search one or several funds

✅ Filter users by document

✅ Update unit price

✅ Find the funds in Bank



**Bad descriptions:**

❌ list the information

❌ Calculates the percentage of the fund

❌ calculates the total

❌ Save user in bank

❌ Update Client

❌ Starts the services and returns the JobId


Reference: [https://herbsjs.org/docs/usecase/features/#creating-a-use-case](https://herbsjs.org/docs/usecase/features/#creating-a-use-case)

## **Creating custom methods in the repository**

To create a non-standard / custom query for your repository, we can call knex directly, without the need to create a new variable and call it in the constructor.

**Don't: create a variable to receive the connection**

``` jsx
// Don't

class UserRepository extends Repository {
    constructor(injection) {
        super({
            entity: User,
            table: "users",
            knex: connection
        })

        this.conn = connection
    }

    async getUserByNickName(nickname) {
        const ret = await this.conn('users').select('*')
        .where('nickname', nickname)
       
        if (!ret[0] || ret[0].length == 0) return undefined
        return User.fromJSON(ret[0])
    }
}

```

**Correct: Use this.knex inside your methods**

Call **this.knex** directly in our methods

``` jsx
// Do

class UserRepository extends Repository {
    constructor(injection) {
        super({
            entity: User,
            table: "users",
            knex: connection
        })
    }

    async getUserByNickName(nickname) {
        const ret = await this.knex('users').select('*')
         .where('nickname', nickname)

        if (!ret[0] || ret[0].length == 0) return undefined
        return User.fromJSON(ret[0])
    }
}

```

## Handling usecase failures

To carry out the treatment of errors that occurred during the execution of the usecase, enable the environment variable [HERBS_EXCEPTION](https://herbsjs.org/docs/usecase/features/) in the production environments so that Herbs can obfuscate the errors generated and handle it on its return.

``` jsx
// Don't
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
           try {
                if (!isValid) return Err(errors)
                return Ok()
            }
            catch(e) {
                throw new "Error to validated product"
            }
        }),

        'Save the Product to the repository': step(async ctx => {
            try {
                ctx.ret.product = await repo.insert(product)
                return Ok()
            }
            catch(e) {
                throw new "Error to save product"
            }
        }),
```

``` jsx
// Do

HERBS_EXCEPTION = audit

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
            if (!isValid) return Err(errors)
            return Ok()
        }),

        'Save the Product to the repository': step(async ctx => {
            ctx.ret.product = await repo.insert(product)
            return Ok()
        }),
```


## Creating the business rules workflow

Use `IfElse` to direct your flow of business rules, making your code easier to understand and document.

``` jsx
// Don't

const updateItem = (injection) =>
  usecase('Update Task', {

    ...
    
    'Check if it is necessary to update Task positions': step(ctx => {
        if(ctx.hasChangedPosition)
        ...
        else
        ...
    }),

    }),
```

``` jsx
// Do

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

## Creating know errors

User Known Errors to expose runtime metadata. With this runtime information the glues like Herbs2REST or Herbs2GraphQL are able to change the API return.

``` jsx
// Don't
const createProduct = injection => usecase('Create Product', {
    'Check if the Product is valid': step(ctx => {
        ...
        if (!isValid) throw 'Product not found'
    }),
```

 

``` jsx
// Do
const createProduct = injection => usecase('Create Product', {
    'Check if the Product is valid': step(ctx => {
        ...
        if (!isValid) {
            const options = { message: Product ID ${id} not found, payload: { entity: 'product' } }
            return Err.notFound(options) // return an Err with "not found" code
        }
}),
```


To learn more about know errors, you can open this link [known-errors](https://herbsjs.org/docs/usecase/result#known-errors)