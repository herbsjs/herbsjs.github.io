---
id: herbs2mongo
title: Herbs2mongo
sidebar_label: Herbs2mongo
slug: /glues/Herbs2mongo
---

# herbs2mongo
herbs2mongo creates repositories to retrieve and store [Entities](https://github.com/herbsjs/gotu) using [Mongo](https://docs.mongodb.com/drivers/node/current/).

### Installing
```
   npm install @herbsjs/herbs2mongo
```

### Using

`connection.js` - MongoDB initialization:
```javascript
const { MongoClient,Logger } = require('mongodb')
const config = require('./config')

let dbInstance = null

module.exports = async () => {
  if (dbInstance) {
      return new Promise((resolve) => resolve(dbInstance))
  }
  const client = await new MongoClient(config.connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }).connect()
  dbInstance = client.db(config.databaseName)
  Logger.setLevel("debug") // set this if you want to debug all queries
  return dbInstance
}
```

`itemRepository.js`
```javascript
const { Repository } = require('@herbsjs/herbs2mongo')
const connection = require('connection')
const { Item } = require('../domain/entities/item')
const database = 'herbs2mongo_testdb'

class ItemRepository extends Repository {
    constructor() {
        super({
            entity: Item,
            collection: 'aCollection',
            database,
            ids: ['id'],
            mongodb: await connection()
        })
    }

    excludedItemFromLastWeek() {
        ...
    }
}
```

`someUsecase.js`
```javascript
const repo = new ItemRepository()
const ret = await repo.findByID('60edc25fc39277307ca9a7ff')
```

### What is a Repository?

A repository, by [definition](https://en.wikipedia.org/wiki/Domain-driven_design#Building_blocks), is part of the layer to retrieve and store entities abstracting the underlying implementation. By using repositories, details of these implementation such as relational database, document-oriented databases, etc, should not leak to the domain code. In other words, no raw SQL queries on your use case or entity files.

### Herbs2mongo Repository

In order to boost productivity herbs2Mongo provides way to dynamically generate a repository class based on your Entities and other metadata.

These metadata are necessary to close the gap between OOP concepts and paradigms and those of relational databases. For example, it is necessary to specify primary keys and foreign keys as these information do not exist in the description of your domain.

Following Herbs architecture principals it is not the intention of this lib to create yet another ODM or query builder but to create a bridge between your domain and an existing one (from Mongo).

### Why Mongo oficial Driver?

herbs2Mongo is just one of many bridges possible between Herbs and other packages.
The advantage of using Mongo is that is a simple and flexible way to retrieve data from MongoDB, as a plus we're using the oficial driver from MongoDB here.

### Repository setup

```javascript
const { Repository } = require('@herbsjs/herbs2mongo')
const connection = require('connection')  // Mongo initialize instance
const { ProductItem } = require('../domain/entities/productItem')
const database = 'herbs2mongo_testdb'

class YourRepository extends Repository {
    constructor() {
        super({
            entity: ProductItem,
            collection: 'product_items',
            database,
            ids: ['id'],
            mongodb: await connection()
        })
    }
}
}
```

- `entity` - The [Entity](https://github.com/herbsjs/gotu) to be used as reference 

    ```javascript
    entity: ProductItem
    ```

- `collection` - The name of the collection in database

    ```javascript
    table: 'product_items'
    ```

- `database` - The name of the database

    ```javascript
    database: 'herbs2mongo_testdb'
    ```

- `ids` - Primary keys

    Format: `['fieldName', 'fieldName', ...]`

    There must be corresponding fields in the entity.

    ```javascript
    ids: ['id']  // productItem.id
    ```

    or for composite primary key: 

    ```javascript
    ids: [`customerId`, `productId`]  // productItem.customerId , productItem.productId
    ```

- `mongoDB` - mongoDB driver initialize instance

    Check mongoDB [documentation](https://docs.mongodb.com/drivers/node/v3.6/)


## Retrieving and Persisting Data


### find
Find entities

Format: `.find(options)` where `id` is a optional object containing `{ limit, skip, orderBy, filter }`.

Return: Entity array

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find()
```

Options:

- `limit`  Adds a limit clause to the query.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find({ limit: 10 })
```

- `skip` Adds an skip clause to the query..

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find({ skip: 5 })
```


- `orderBy` Adds an order by clause to the query. Column can be string, or list mixed with string and object...

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find({ orderBy: 'description'})
```

- `filter` Adds a filter to the query with given values.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find({ filter: { stringTest: ["aString"] } })
```


### findByID
Find entities by IDs

Format: `.findByID(id)` where `id` is a ObjectId string, this will be changed to _id automaticaly.

Return: Entity array

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.findByID('60edc25fc39277307ca9a7ff')
```

### insert
Insert an Entity into a table.

Format: `.insert(entity)` where `entity` is a Entity instance with values to be persisted..

Return: The inserted entity with the values from database.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.insert(aNewEntity)
```

### insertMany
Insert an array of Entities into a table.

Format: `.insertMany([entity])` where `[entity]`is a array of Entities instances with values to be persisted.

Return: The inserted entity with the values from database.

```javascript

const aNewArrayofEntities = [
  givenAnEntity('string one test',false),
  givenAnEntity('string two test',true)
]

const repo = new ItemRepository(injection)
const ret = await repo.insertMany(aNewArrayofEntities)
```

### update
Update an Entity.

Format: `.update(entity)` where `entity` is a Entity instance with values to be persisted.

Return: The updated entity with the values from database.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.update(aModifiedEntity)
```

### updateMany
Update a group of Entities.

Format: `.updateMany(options)` where `options` is a set of conditionals and new values to set a group of entities.

Return: The updated entity with the values from database.

```javascript
const repo = new ItemRepository(injection)
let filterDefinition = { id: anEntity.id  }
let updateDefinition = { $set: { "stringTest" : "everything works very well" } }
await itemRepo.updateMany({ filter: filterDefinition, update: updateDefinition})
```

### deleteByID
Delete an Entity..

Format: `.deleteByID(id)` where `id` is a ObjectId string, this will be changed to _id automaticaly..

Return: true for success or false for error.

```javascript
const repo = new ItemRepository(injection)
let filterDefinition = {  numberTest : [aModifiedInstance.numberTest] }
const ret = await repo.deleteMany({ filter: filterDefinition })
```

## TODO

- [ ] Allow only scalar types for queries (don't allow entity / object types)
- [ ] Allow to ommit schema's name

Features:
- [ ] Be able to change the conventions (injection)
- [ ] Exclude / ignore fields on all query statement
- [ ] Awareness of created/updated at/by fields
- [X] Plug-and-play MongoDB

Retrieving and Persist:
- [X] insert
    - [x] batchs
- [X] update
    - [x] batchs
- [X] delete (id)
    - [x] batchs
- [ ] persist (upsert)
- [X] find (ID)
    - [ ] deal with entities / tables with multiples IDs
- [X] find by (any field)
    - [ ] deal with entities / tables with multiples IDs
    - [x] order by
    - [x] limit
    - [x] skip
- [x] find All
    - [x] order by
    - [x] limit
    - [x] skip
- [x] find with pages
- [ ] agregations
- [ ] replace
- [ ] collation
- [ ] watch
- [ ] first
- [ ] last

Tests:
- [X] Pure JS
- [X] MongoDB