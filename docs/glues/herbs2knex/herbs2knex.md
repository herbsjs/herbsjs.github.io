---
id: herbs2knex
title: Getting Started with Herbs2Knex
sidebar_label: Getting Started
slug: /glues/Herbs2knex
---

Creates repositories to retrieve and store [Entities](/docs/entity/getting-started) using [Knex](http://knexjs.org), a relational database query builder for Node.js.

### Installing
```bash
$ npm install @herbsjs/herbs2knex
```
### Using

`connection.js` - Knex initialization:
```javascript
const knex = require('knex')
const config = require('./config')
module.exports = knex(config)
```

`itemRepository.js`:
```javascript
const { Repository } = require('@herbsjs/herbs2knex')
const connection = require('connection')
const { Item } = require('../domain/entities/item')

class ItemRepository extends Repository {
    constructor() {
        super({
            entity: Item,
            table: 'aTable',
            ids: ['id'],
            knex: connection
        })
    }

    excludedItemFromLastWeek() {
        ...
    }
}
```

`someUsecase.js`:
```javascript
const repo = new ItemRepository()
const ret = await repo.findByID(1)
```

### What is a Repository?

A repository, by [definition](https://en.wikipedia.org/wiki/Domain-driven_design#Building_blocks), is part of the layer to retrieve and store entities abstracting the underlying implementation. By using repositories, details of these implementation such as relational database, document-oriented databases, etc., should not leak to the domain code. In other words, no raw SQL queries on your use case or entity files.

### Herbs2knex Repository

In order to boost productivity, Herbs2knex provides ways to dynamically generate, on the fly (no code generation), a repository class based on your Entities and other metadata. 

These metadata are necessary to close the gap between OOP concepts and paradigms and those of relational databases. For example, it is necessary to specify primary keys and foreign keys as these information do not exist in the description of your domain.

Following Herbs architecture principals, it is not the intention of this lib to create yet another ORM or query builder but to create a bridge between your domain and an existing one (Knex).

### Why Knex?

Herbs2knex is just one of many bridges possible between Herbs and other packages.

The advantage of using Knex is that is a simple and flexible SQL query builder. It also supports Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle and Amazon Redshift. Therefore, you can build your system using these databases out of the box.
