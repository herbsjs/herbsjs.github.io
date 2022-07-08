---
id: specs
title: 5. specs
sidebar_label: 5. Specs
slug: /tutorial/specs
---

After creating our entities, setup the database and set databases credentials in configuration files. We will run a special `herbs-cli` command thats will generate migrations files in `src/infra/data/database/migrations`, repositories files in `src/infra/data/database/repositories`.

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

## Migrations 🚧

-- explicar migrations

-- referencia de como rodar migrations com knex [colinha](http://perkframework.com/v1/guides/database-migrations-knex.html)

### Running migrations

## Repositories

A repository is a design pattern intended to decouple database code from your business logic.

This pattern bring some important benefits. First, makes your code easier to read and maintain, because database code is not spread throughout application. Second, the code becomes significantly easier to unit test. Its be easily mock repositories while testing your business logic instead of having to set up databases, tables and seeding them with data. And third, the business logic does not depend strongly on a specific database platform.

After `herbs update` run, its automatic create inside `src/infra/data/database/repositories`
a repository file for each entity we previous created.

These repositories files abstract `knex.js` to make queries in database and any class created in these files
will be exported for `herbarium.repositories`, so we will can access theses repositories inside any place in our application importing `herbarium`.

A repository file it should be like:
```javascript
// src/infra/data/database/repositories/itemRepository.js

const { Repository } = require("@herbsjs/herbs2knex")
const { herbarium } = require('@herbsjs/herbarium')
const Item = require('../../../domain/entities/item')
const connection = require('../database/connection')

class ItemRepository extends Repository {
    constructor(injection) {
        super({
            entity: Item,
            table: "items",
            knex: connection
        })
    }
}

module.exports =
    herbarium.repositories
        .add(ItemRepository, 'ItemRepository')
        .metadata({ entity: Item })
        .repository
```
