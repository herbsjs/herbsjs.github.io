---
id: refactoring
title: 7. Refactoring
sidebar_label: 7. Refactoring
slug: /tutorial/refactoring
---

## Adding a Field
- Migration
- Result

## Changing a Field's Type
- Migration
- Result

## Adding an Use Case

When you add a new use case, you have to add them to the setup files. Check out the process:

### GraphQL Setup

As mentioned in [Generating GraphQL Endpoint](./graphql), the operations are set in the files: `queries.js` and `mutations.js`.

So, once you've created a new use case, you have to add it to one of them. If the use case create or update data, put it in `mutations.js`. If it just fetch data, put it in `queries.js`.

```js
// src/infra/api/graphql/queries.js
const { usecase2query, defaultResolver } = require('@herbsjs/herbs2gql')

// Require all the usecases and put them
// in a list.
const usecases = [
    /** ... previous usecases */
    require('../../../domain/usecases/list/myNewUsecase.js').myNewUsecase,
]

/** ... */
```

Now, the new usecase will show up in the GraphQL operations.

### Herbs Shelf

The process is similar for [Herbs Shelf](./herbsshelf). Once you've created a new use case, you have to add it to the file `_uclist.js`, passing the `usecase` and the `group` in the `tags`:

```js
// src/domain/usecases/_uclist.js
module.exports = (injection) => {
    return [
        /* ... previous usecases */
        {
            // the usecase with the injection
            usecase: require('./myNewUsecase').myNewUsecase(injection),
            // the tags to store metadata, such as the group
            tags: { group: 'My Group' }
        }
    ]
}
```

Now, the new use case will show up in the docs.
