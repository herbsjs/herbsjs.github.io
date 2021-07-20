---
id: graphql
title: 5. Generating GraphQL Endpoint
sidebar_label: 5. Generating GraphQL Endpoint
slug: /tutotial/graphql
---

> GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data.
>
> — [*Introduction to GraphQL | GraphQL*](https://graphql.org/learn)

Herbs supports in REST **and** GraphQL APIs, which means that you can provide two options for the client's request using the same usecase!

Let's walk through the required setup to use that GraphQL layer of herbs. The GraphQL server needs 3 main defnitions to work:

- **Types**: to define the entities properties to the client.
- **Queries**: to define the usecases which fetch data.
- **Mutation**: to define the usecases which create or update data.

Using [`herbs2gql`](/docs/glues/herbs2gql) it is really simple to set them all based on concepts we've seen before (eg. [entity](/docs/entity/getting-started) and [usecase](/docs/usecase/getting-started)).

## Types

In this case, we are going to set the type for List and Item entities.

For an entity like Item:

```js
entity('Item', {
    id: field(Number),
    description: field(String),
    isDone: field(Boolean),
    position: field(Number)
})
```

the type definition in the GraphQL syntax would be something like this:

```graphql
type Item {
    id: Float!
    description: String!
    isDone: Boolean
    position: Float!
}
```

But hopefully, we don't have to convert each entity by hand, we can use the function `entity2type` from `@herbsjs/herbs2gql`:

```js
// src/infra/api/graphql/types.js
const { entity2type } = require('@herbsjs/herbs2gql')

// Require all the entities and put them
// in a list.
const entities = [
    require('../../../domain/entities/item').Item,
    require('../../../domain/entities/list').List
]

// Set the default schema for the types.
const defaultSchema = [`
    type Query {
        _: Boolean
    }
    type Mutation {
        _: Boolean
    }`]

// Set the list of types, initally with
// just the default one.
let types = [defaultSchema]

// For each entity in the list `entities`
// convert it to a type and put it in the
// list of `types`.
types = types.concat(entities.map(entity => [entity2type(entity)]))

module.exports = types
```

## Queries

The process to set up GraphQL is pretty similar to the previous one.

We are going to use the `usecase2query` util and the `defaultResolver`, both from `@herbsjs/herbs2gql`:

```js
// src/infra/api/graphql/queries.js
const { usecase2query, defaultResolver } = require('@herbsjs/herbs2gql')

// Require all the usecases and put them
// in a list.
const usecases = [
    require('../../../domain/usecases/list/getList.js').getList,
    /* More usecases here... */
]

// For each usecase in the list `usecases`
// convert it to a query and put it in the
// list of `queries`.
const queries = usecases.map(usecase => usecase2query(usecase(), defaultResolver(usecase)))

module.exports = queries
```

## Mutations

The same thing for mutations, but now we are using the `usecase2mutation` util:

```js
// src/infra/api/graphql/mutations.js
const { usecase2mutation, defaultResolver } = require('@herbsjs/herbs2gql')

// Require all the usecases and put them
// in a list.
const usecases = [
    require('../../../domain/usecases/list/createList.js').createList,
    /* More usecases here... */
]

// For each usecase in the list `usecases`
// convert it to a mutation and put it in the
// list of `mutations`.
const mutations = usecases.map(usecase => usecase2mutation(usecase(), defaultResolver(usecase)))

module.exports = mutations
```
