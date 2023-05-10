---
id: features
title: Herbs2Knex Features
sidebar_label: Features
slug: /herbs2knex/features.md
---


### Repository setup

```javascript
const { Repository } = require('@herbsjs/herbs2knex')
const connection = require('connection')  // Knex initialize instance
const { ProductItem } = require('../domain/entities/productItem')

class YourRepository extends Repository {
    constructor() {
        super({
            entity: ProductItem,
            schema: 'main',
            table: 'product_items',
            ids: ['id'],
            foreignKeys: [{ customerId: String }],
            knex: connection
        })
    }
}
```

- `entity` - The [Entity](https://github.com/herbsjs/gotu) to be used as reference 

    ```javascript
    entity: ProductItem
    ```

- `schema` - The schema to be used  

    ```javascript
    schema: 'production'
    ```

- `table` - The name of the table in database

    ```javascript
    table: 'product_items'
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

    It is possible to omit the `ids` property if the entity already has fields defined on it with `field` and the `isId` option or `id` helper functions:

    ```javascript
    // entity definition
    const Order = entity('Order', {
        orderSequence: field(Number, { isId: true }),
        customerId: id(Number)
    })

    // repository definition
    class OrderRepository extends Repository {
        constructor({
            entity: Order,
            // same as ids: ['orderSequence', 'customerId']
        })
    }

    ```

- `foreignKeys` (optional) - Foreign keys for the database table

    Usually, there is no corresponding fields declared in the entity for foreign keys. That is the reason it is necessary to inform the name and the type of the fields.

    Format: `[{ fieldName: Type }, { fieldName: Type }, ...]`

    ```javascript
    foreignKeys: [{ customerId: String }]
    ```

    The field names will te converted to a database names using conventions. Ex: `customer_id`

- `knex` - Knex initialize instance
    
    Check Knex [documentation](http://knexjs.org/#Installation-client)



## Retrieving and Persisting Data

### find
Find entities matched by the filter, or empty array `[]` if there is no matching entity.

Format: `.find(options)` where `options` is a optional object containing `{ where, limit, offset, orderBy }`

Return: Entity array

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find()
```

Options:

- `where`
Adds a filter to the query with given values.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find({ where: { name: ["Anne"] } })
```

- `limit`
Adds a limit clause to the query.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find({ limit: 10 })
```

- `offset`
Adds an offset clause to the query.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.find({ offset: 5 })
```

- `orderBy`
Adds an order by clause to the query. Column can be string, or list mixed with string and object.

```javascript
// order by collum
const repo = new ItemRepository(injection)
const ret = await repo.find({ orderBy: 'description'})

// order by complex query
const repo = new ItemRepository(injection)
const ret = await repo.find({ orderBy: [{ column: 'nome', order: 'desc' }, 'email'] })
```

### findByID
Find entities by IDs

Format: `.findByID(id)` where `id` is a value or an array.

Return: Entity array

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.findByID(10)
```

### insert

Insert an Entity into a table.

Format: `.insert(entity)` where `entity` is a Entity instance with values to be persisted.

Return: The inserted entity with the values from database.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.insert(aNewEntity)
```

### update

Update an Entity.

Format: `.update(entity)` where `entity` is an Entity instance with values to be persisted.

Return: The updated entity with the values from database.

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.update(aModifiedEntity)
```

### delete

Delete an Entity.

Format: `.delete(entity)` where `entity` is an Entity instance to be deleted.

Return: `true` for success or `false` for error

```javascript
const repo = new ItemRepository(injection)
const ret = await repo.delete(entity)
```

## Conventions - Defaul implementation

### Fields

Code: Camel Case - ex: `productName`

Database: Snake Case - ex: `product_name`


## Setting up a database - Config Files

Before we start using the database, it's required to set up the configurations. We can choose between `postgres`, `mysql`, `sqlserver` or `mongo`, database to store the data, so the setup is slightly different for each one of them. You can go directly to the one you've chosen:

- [PostgreSQL](#set-up-with-postgresql)
- [MySQL](#set-up-with-mysql)
- [SQLServer](#set-up-with-sqlserver)
- [Mongo](#set-up-with-mongo)

####  KnexFile
Projects thats uses Postgres, MySQL or SQLServer use [Knex.js](http://knexjs.org/) under the hood, so in these settings we'll have a `knexFile.js` in root of project. Make sure your database access credentials are matched in the `knexFile.js` and in the appropriate configuration file founded in `src/infra/config/...`.

The file `knexFile.js` it will should be like this:
```js
module.exports = {
    development: {
            client: 'postgresql',
            connection: {
            database: 'todo-api',
            user: 'postgres',
            password: 'postgres',
            host: '127.0.0.1',
            port: 5432
        },
        migrations: {
            directory: './src/infra/data/database/migrations',
            tableName: 'knex_migrations'
        }
    },
    staging: {},
    production: {}
}
```

### Set up with PostgreSQL

The configuration file is `src/infra/config/postgres.js`. It looks like this:

```js
// src/infra/config/postgres.js
const env = require('sugar-env')
require('dotenv').config()

module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    database: 'todoApiDatabase'
  }
}
```
### Set up with MySQL

The configuration file is `src/infra/config/mysql.js`. It looks like this:

```js
// src/infra/config/mysql.js
require('dotenv').config()

module.exports = {
  herbsCLI: 'mysql',
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'herbs-mysql'
  }
}
```

### Set up with SQLServer

The configuration file is `src/infra/config/mysql.js`. It looks like this:

```js
// src/infra/config/sqlserver.js
require('dotenv').config()

module.exports = {
  herbsCLI: 'mssql',
  client: 'mssql',
  connection: {
    server: '127.0.0.1',
    port: 1433,
    user: 'sa',
    password: 'password',
    database: 'herbs-sqlserve',
    options: {
      trustServerCertificate: true
    }
  }
}
```
