---
id: working-with-herbarium
title: Working with Herbarium
sidebar_label: Working with Herbarium
slug: /herbarium/working-with-herbarium
---

### Advanced Options

`options`:
- `initialPath`: (optional) default `process.cwd()`
- `avoidFiles`: (optional) default `(fileName) => fileName.includes('test.js') ? false : fileName`
- `entitiesPath`: (optional) default `/src/domain/entities`
- `usecasesPath`: (optional) default `/src/domain/usecases`
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

The second parameter of the `herbarium.usecases.add` function is the usecase id for herbarium. It is optional and if none is provided, it uses the usecase description (`Create Item`).

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

```javascript
const entities = herbarium.entities.all
const usecases = herbarium.usecases.all
const repositories = herbarium.repositories.all
```

#### findBy

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

```javascript
const entity = herbarium.entities.get(1)
const usecase = herbarium.usecases.get("a")
const repository = herbarium.repositories.get(item)
```

### Issues & Discussions

Now, if you do not have technical knowledge and also have intend to help us, do not feel shy, [click here](https://github.com/herbsjs/herbarium/issues) to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)

If you would like to help contribute to this repository, please see [CONTRIBUTING](https://github.com/herbsjs/herbarium/blob/master/.github/CONTRIBUTING.md)

We have a Discord server with our discussions and questions about the world around Herbs. If you have any questions, you can communicate with the community through this link: [Herbs Discord](https://discord.gg/e3cQ66KDv5)

Come with us to make an awesome *Herbarium*.