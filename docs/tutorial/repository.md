---
id: repository
title: 4. Generating Repositories
sidebar_label: 4. Generating Repositories
slug: /tutorial/repository
---

## Database Config Files

Before we start using the database, it's required to set up the configurations. We can choose between `mongo` and `postgres` database to store the data, so the setup is slightly different for each one of them. You can go directly to the one you've chosen:

- [Mongo](https://mongodb.com)
- [PostgreSQL](https://www.postgresql.org)

### Set up with Mongo

The configuration file is `src/config/mongo.js`. It looks like this:

```js
// src/config/mongo.js
const env = require('sugar-env')
require('dotenv').config()

module.exports = {
  dbName: env.get(`$MONGO_DATABASE`, 'herbs-project'),
  connstr: env.get(`$MONGO_CONN_STR`, 'mongodb://localhost:27017'),
}
```

So you can provide a custom name and connection URL for the database using the environment variables or use the default ones.

### Set up with PostgreSQL

The configuration file is `src/config/postgres.js`. It looks like this:

```js
// src/config/postgres.js
const env = require('sugar-env')
require('dotenv').config()

module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    database: 'herbs-project'
  }
}
```

Here you can change their values to match with your credentials, database name, host, etc.

## Creating Database and Migration

After creating the database with the name explained above, you can find the files to setup the database in `src/infra/data/`.

There we have two folders:

### `database/`

To set up the database connection.

With the [automatic project creation](/docs/tutorial/new-project), there is an `index.js` file making the connection with the database.

This file depends on which database you choose, in the case of `mongo` it should be like this:

```js
// src/infra/data/database/index.js
const { MongoClient } = require('mongodb')

let dbInstance = null;

module.exports = {
    factory: async (config) => {
        if (dbInstance) {
            return new Promise((resolve) => resolve(dbInstance))
        }
        const client = await new MongoClient(config.database.connstr, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).connect()
        dbInstance = client.db(config.database.name)
        return dbInstance
    }
}
```

### `repositories/`

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

## Repository Setup

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
