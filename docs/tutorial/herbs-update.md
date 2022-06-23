---
id: migrations-repositories-usecases
title: 5. Migrations, Repositories & Usecases 🚧
sidebar_label: 5. Migrations, Repositories & Usecases 🚧
slug: /tutorial/migrations-repositories-usecases
---

After creating our entities, setup the database and set databases credentials in configuration files. We will run a special `herbs-cli` command thats will generate migrations files in `src/infra/data/database/migrations`, repositories files in `src/infra/data/database/repositories` and usecase files in `src/domain/usecases`.

Let's run in terminal inside our project root:
```bash
herbs update
```

In this moment some magic happens 🎉!!
Now we can see our project structure folder it should be like this:

```bash
├── node_modules
├── package-lock.json
├── package.json
├── knexFile.js
└── src
    ├── index.js
    ├── domain
    │   ├── entities
    │   │   ├── Item.js
    │   │   └── List.js
    │   ├── usecases
    │   │   ├── item
    │   │   │    └── ...
    │   │   └── list
    │   │        └── ...
    │   └── herbarium.js 
    └── infra
        ├── api
        │   ├── graphql
        │   │   ├── index.js
        │   │   ├── queries.js
        │   │   ├── mutations.js
        │   │   └── types.js
        │   └── server.js      
        ├── config
        │   ├── api.js
        │   ├── index.js
        │   └── postgres.js
        ├── data
        │   └── database
        │       ├── migrations
        │       │   └── ...
        │       ├── repositories
        │       │   └── ...
        │       └── connection.js
        └── index.js
        
```

## Migrations

-- explicar migrations

-- rodar migrations com knex [colinha](http://perkframework.com/v1/guides/database-migrations-knex.html)

### Running migrations

## Repositories

To develop the repositories for each entity.

With the [automatic project creation](/docs/tutorial/new-project), there are two important files:

- `index.js` - Requiring all the necessary repositories and providing the database connection to them.
- `baseRepository.js` - To be used as a boilerplate and make it easy to create repositories.

If you want to create your own files, or did not use `herbs-cli`, the `index.js` should be like this:

```js
// Receive the database connection
async function factory(conn) {
    return {
        // Return each repository, providing the connection to them
        userRepository: await new (require('./userRepository.js'))(conn)
    }
}

module.exports = factory
```

### Repository Setup

To setup a new repository, you may use the `BaseRepository` and then set the options as you want.

For example, let's setup the list repository:

```js
// src/infra/data/repositories/listRepository.js
const Repository = require('./baseRepository')

module.exports = class ListRepository extends Repository {
    constructor(mongoInstance){
        super({ 
            collection: 'list',  
            mongo: mongoInstance  
        })
    }
}
```

## Usecases

explicar os arquivos gerados por alto