---
id: setup-database
title: 4. Setting Up Databases
sidebar_label: 4. Setting Up Databases
slug: /tutorial/setup-database
---

## Database Config Files

Before we start using the database, it's required to set up the configurations. We can choose between `postgres`, `mysql`, `sqlserver` or `mongo`, database to store the data, so the setup is slightly different for each one of them. You can go directly to the one you've chosen:

- [PostgreSQL](https://www.postgresql.org)
- [MySQL](https://www.mysql.com/)
- [SQLServer](https://www.microsoft.com/en-us/sql-server/sql-server-2019)
- [Mongo](https://mongodb.com)

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
    database: 'herbs-project'
  }
}
```

### Set up with MysqlSQL

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

### Set up with Mongo

The configuration file is `src/infra/config/mongo.js`. It should be like this:

```js
// src/infra/config/mongo.js
const env = require('sugar-env')
require('dotenv').config()

module.exports = {
  herbsCLI: 'mongo',
  dbName: env.get(`$MONGO_DATABASE`, 'herbs-mongo'),
  connstr: env.get(`$MONGO_CONN_STR`, 'mongodb://localhost:27017'),
}
```

and in `src/infra/data/database/connection.js` we can see a mongodb instance configuration

```js
// src/infra/data/database/connection.js
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

So you can provide a custom name and connection URL for the database using the environment variables or use the default ones.

In these files you can change their values to match with your credentials, database name, host, etc.

