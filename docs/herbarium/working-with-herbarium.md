---
id: working-with-herbarium
title: Working with Herbarium
sidebar_label: Working with Herbarium
slug: /herbarium/working-with-herbarium
---

### Herbarium

Herbarium is a centralized and standardized repository and discovery service for Herbs objects (entities, use cases, repositories) allowing glues (ex: Herbs Shelf, herbs2rest, herbs2gql, herbs2knex, etc) to access, explore and find these objects.

### Installing

```javascript
$ npm install @herbsjs/herbarium
```

### Initializing

To start using Herbarium it is necessary to load all the objects in the project.

```javascript
const { herbarium } = require('@herbs/herbarium')
herbarium.requireAll(options)
```

This will find and require() all entities, use cases and repositories files. If these files are using Herbarium, it will load all the objects to be used later.

You can check which files were found within the ```herbarium.requireAll(options)``` method using:

```javascript
const { herbarium } = require('@herbs/herbarium')
const retqAll = herbarium.requireAll(options)

/* Will return an object of array of files founded
 {
   entities:[],
   usecases":[],
   repositories:[]
  }
*/
```
 You can use advanced options off `requireAll()`

`options`:
- `initialPath`: (optional) default `process.cwd()`
- `avoidFiles`: (optional) default `(fileName) => (fileName.includes('.spec.js') || fileName.includes('.test.js') ? false : fileName)`
- `onlySpecs`: (optional) default `(fileName) => (fileName.includes('.spec.js') ? fileName : false)`
- `entitiesPath`: (optional) default `/src/domain/entities`
- `usecasesPath`: (optional) default `/src/domain/usecases`
- `specPath`: (optional) default `/src/domain/`
- `repositoriesPath`: (optional) default `/src/infra/repositories`

### Adding Objects and Metadata

#### Entities

```javascript
// src/domain/entities/item.js
const { entity, field } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')

const Item =
    entity('Item', {
        ...
    })

module.exports =
    herbarium.entities
        .add(Item, 'Item')
        .entity
```

The second parameter of the `herbarium.entities.add` function is the entity id for herbarium. It is optional and if none is provided, it uses the entity name (`Item`).

#### Use Cases

```javascript
// src/domain/usecases/item/createItem.js
const { usecase } = require('@herbsjs/herbs')
const { herbarium } = require('@herbsjs/herbarium')
const { Item } = require('../entities/item')

const createItem = (injection) =>
    usecase('Create Item', {
        ...
    })

module.exports =
    herbarium.usecases
        .add(createItem, 'CreateItem')
        .metadata({ group: 'Items', operation: herbarium.crud.create, entity: Item })
        .usecase
```

The second parameter of the `herbarium.usecases.add` function is the usecase id for herbarium. It is optional and if none is 
provided, it uses the usecase description (`Create Item`).

#### Specs

```javascript
// src/domain/usecases/createItem.spec.js
const { spec, scenario, given, check } = require('@herbsjs/aloe')

const createItemSpec = spec({ 
    ...
    })

module.exports =
    herbarium.specs
        .add(createItemSpec, 'CreateItemSpec')
        .spec
```

The second parameter of the `herbarium.specs.add` function is the entity id for herbarium.

 #### Repository

```javascript
const { herbarium } = require('@herbsjs/herbarium')
const { Repository } = require("@herbsjs/herbs2knex")
const { Item } = require('../../../domain/entities/item')

class ItemRepository extends Repository {
    constructor(injection) {
        ...
    }
}

module.exports =
    herbarium.repositories
        .add(ItemRepository, 'ItemRepository')
        .metadata({ entity: Item })
        .repository
```

The second parameter of the `herbarium.repositories.add` function is the repository id for herbarium. It is optional and if none is provided, it uses the repository class name (`ItemRepository`).

### Consuming Objects

#### All

Returns all objects of a given type.

```javascript
const entities = herbarium.entities.all
const usecases = herbarium.usecases.all
const repositories = herbarium.repositories.all
```

#### findBy

All operations you can do on any data can be boiled down to Create, Read, Update, and Delete (CRUD). You can create something new, you can read it, update it, and finally delete it if you wish. For that, you can assign the property that best fits your use case and then filter it through the method findBy()

To find entities that matched by the filter:

```javascript
const usecases = herbarium.usecases.findBy({
  operation: [
    herbarium.crud.create,
    herbarium.crud.update,
    herbarium.crud.delete,
  ],
})
```

#### get by id

To find entities by IDs.

```javascript
const entity = herbarium.entities.get(1)
const usecase = herbarium.usecases.get("a")
const repository = herbarium.repositories.get(item)
```
