---
id: repositories
title: 6. Repositories
sidebar_label: 6. Repositories
slug: /tutorial/repositories
---
## Introduction to the repository concept

A repository is a design pattern intended to decouple database code from your business logic.

This pattern bring some important benefits. First, makes your code easier to read and maintain, because database code is not spread throughout application. Second, the code becomes significantly easier to unit test. Its be easily mock repositories while testing your business logic instead of having to set up databases, tables and seeding them with data. And third, the business logic does not depend strongly on a specific database platform.

After `herbs update` run, its automatic create inside `src/infra/data/database/repositories` a repository file for each entity we previous created.

These repositories files abstract `knex.js` to make queries in database and any class created in these files will be exported for `herbarium.repositories`, so we will can access theses repositories inside any place in our application importing `herbarium`.

## itemRepository.js

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
