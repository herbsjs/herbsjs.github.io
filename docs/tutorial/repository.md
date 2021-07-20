---
id: repository
title: 3. Generating Repositories
sidebar_label: 3. Generating Repositories
slug: /tutotial/repository
---

## Database Config Files

Before we start using the database, is required to setup the configurations. For that, the files are in `src/config/`.

There is a file called `mongo.js` or `postgres.js`, depending on which one you've choosed. And it should look like this:

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

## Creating Database and Migration

After creating the database with the name explained above, you can found the files to setup the database in `src/infra/data/`.

There we have two folders:

### `databse/`

To set up the database connection.

With the [automatic project creation](/docs/tutotial/new-project), there is an `index.js` file making the connection with the database.

This file is dependent of which database you choose, in the case of `mongo` it should be like this:

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

With the [automatic project creation](/docs/tutotial/new-project), there are two important files:

- `index.js` - Requiring all the necessary repositories and providing the database connection to them.
- `baseRepository.js` - To be used as a boilerplate and make easy to create repositories.

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
