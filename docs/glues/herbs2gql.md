---
id: herbs2gql
title: Herbs2gql
sidebar_label: Herbs2gql
slug: /glues/herbs2gql
---

herbs2gql creates GraphQL types based on herbs entities ([gotu](https://github.com/herbsjs/gotu)) and usecases ([buchu](https://github.com/herbsjs/buchu)), based on [Apollo](https://www.apollographql.com/) GraphQL.


## Getting started
### Installing
```
   npm install @herbsjs/herbs2gql
```
### Using

All methods returns a string in GraphQL format representing the type based ([gql](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#gql)) and a [resolver](https://www.apollographql.com/docs/apollo-server/data/resolvers/) (when expected).

``` js
const { entity, field } = require('@herbsjs/herbs')
const { entity2type } = require('@herbsjs/herbs2gql')

const user = entity('User', {
    id: field(String),
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
## Features

### GraphQL Type

To convert a Herbs Entity to GraphQL Type:

```javascript
const entity = entity('User', {
    id: field(String),
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

#### Example

Additionally you can view a simple demo application of this library in [todolist-on-herbs](https://github.com/herbsjs/todolist-on-herbs).

## Contribute
Come with us to make an awesome *herbs2gql*.

Now, if you do not have the technical knowledge and also have intended to help us, do not feel shy, [click here](https://github.com/herbsjs/herbs2gql/issues) to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)

If you would like to help contribute to this repository, please see [CONTRIBUTING](https://github.com/herbsjs/herbs2gql/blob/main/.github/CONTRIBUTING.md)

## License

**herbsshelf** is released under the
[MIT license](https://github.com/herbsjs/herbs2gql/blob/main/LICENSE.md)
