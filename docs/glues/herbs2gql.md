---
id: herbs2gql
title: GraphQL - Herbs2GQL
sidebar_label: GraphQL
slug: /glues/herbs2gql
---

Creates GraphQL types (queries, mutations, etc.) based on herbs [entities](/docs/entity/getting-started) and [usecases](/docs/usecase/getting-started), based on [Apollo](https://www.apollographql.com/) GraphQL.


## Getting started
### Installing
```bash
$ npm install @herbsjs/herbs2gql
```
### Using
If your project uses [Herbarium](https://github.com/herbsjs/herbarium) as discovery service you can generate mutations, queries and types with less code.

```javascript
const { herbarium } = require('@herbsjs/herbarium')
const { herbs2gql } = require('@herbsjs/herbs2gql')

const { mutations, queries, types } = herbs2gql(herbarium)
```


## Advanced Features

All methods returns a string in GraphQL format representing the type based ([gql](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#gql)) and a [resolver](https://www.apollographql.com/docs/apollo-server/data/resolvers/) (when expected).

``` js
const { entity, field, id } = require('@herbsjs/herbs')
const { entity2type } = require('@herbsjs/herbs2gql')

const user = entity('User', {
    id: id(String),
    name: field(String),
    document: field(String),
    age: field(Number),
    active: field(Boolean),
})

const gql = entity2type(user)
console.log(gql)
/* Result
type User {
    id: String
    name: String
    document: String
    age: Float
    active: Boolean
}
*/
```

### GraphQL Type

To convert a Herbs Entity to GraphQL Type:

```javascript
const entity = entity('User', {
    id: id(String),
    name: field(String),
    document: field(String),
    age: field(Number),
    active: field(Boolean),
})

const gql = entity2type(entity)
```

### GraphQL Input

To convert a Herbs Entity to GraphQL Input:

```javascript
const entity = entity('UserFilter', {    
    name: field(String),    
    age: field(Number),    
})

const gql = entity2input(entity)
```

### GraphQL Query

To convert a Herbs Use Case to GraphQL Query:

```javascript
const usecase = usecase('Get User', {
    request: {
        id: Number,
        document: String
    },

    response: User
})

const resolverFunc = (parent, args, context, info) => { }

const [gql, resolver] = usecase2query(usecase, resolverFunc)
```

### GraphQL Mutation

To convert a Herbs Use Case to GraphQL Mutation:

```javascript
const usecase = usecase('Update User', {
    request: {
        id: Number,
        name: String,
        age: Number,
        active: Boolean
    },

    response: User
})

const resolverFunc = (parent, args, context, info) => { }

const [gql, resolver] = usecase2mutation(usecase, resolverFunc)
```

### GraphQL Subscription

To convert a Herbs Use Case to GraphQL Subscription:

```javascript
const usecase = usecase('New User Notification', {
    request: {
        id: Number,        
    },

    response: UserMessage
})

const resolverFunc = () => { }

const [gql, resolver] = usecase2subscription(usecase, resolverFunc)
```


### Custom Names or Conventions
In Herbs it is possible to include personalized names for queries, mutations, inputs and types
custom names are always prioritized

#### Custom Names

```javascript
const options = { inputName: 'An-Entity' }

// for entity2input
const gql = entity2input(givenAnInput, options)

// for entity2type
const gql = entity2type(givenAnEntity, options)

//for mutation, query or subscription example using mutation
const [gql, resolver] = usecase2mutation(givenAUseCase, resolverFunc, options)
```

#### Conventions
At the convention, a function must be sent, it must return a text formatted according to the sended convention
```javascript
const options = { convention: { inputNameRule: (str) => `snake_case_returned` }}

// for entity2input
const gql = entity2input(givenAnInput, options)

// for entity2type
const gql = entity2type(givenAnEntity, options)

//for mutation, query or subscription example using mutation
const [gql, resolver] = usecase2mutation(givenAUseCase, resolverFunc, options)
```

### Apollo Errors and Err

`herbs2gql` deals with errors in the default resolver. It translates the usecase's errors into graphql errors:

| Usecase Error            | Apollo Error   |
|--------------------------|----------------|
| Permission Denied        | ForbiddenError |
| Not Found                | ApolloError    |
| Already Exists           | ApolloError    |
| Unknown                  | ApolloError    |
| Invalid Arguments        | UserInputError |
| Invalid Entity           | UserInputError |
| Any other kind of errors | UserInputError |

However, it's behavior can be overridden in the `errorHandler` property of the options parameter:

```javascript
const { defaultResolver } = require("@herbsjs/herbs2gql")

const myCustomErrorHandler = (usecaseResponse) => {
  // handle the errors on your own way
}

const options = {
  errorHandler: myCustomErrorHandler,
}

const updateUser = usecase("Update User", {
  // usecase implementation
})

const [gql, resolver] = usecase2mutation(
  updateUser(),
  defaultResolver(updateUser, options)
)
```

Your custom error handler can also utilize the `defaultErrorHandler` as a fallback:

```javascript
const { defaultResolver, defaultErrorHandler } = require("@herbsjs/herbs2gql")

const myCustomErrorHandler = (usecaseResponse) => {
  // handle the errors on your own way

  // use the default error handler when there is no need of a specific treatment
  return defaultErrorHandler(usecaseResponse)
}

const options = {
  errorHandler: myCustomErrorHandler,
}

const updateUser = usecase("Update User", {
  // usecase implementation
})

const [gql, resolver] = usecase2mutation(
  updateUser(),
  defaultResolver(updateUser, options)
)
```

The [Known Errors​](/docs/usecase/result#known-errors) are described in the documentation.

