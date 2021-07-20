---
id: create-entity
title: 2. Creating Entities
sidebar_label: 2. Creating Entities
slug: /tutotial/create-entity
---

Since we are developing a TODO list, we have to create two entities: List and Item.

> Refer to [Getting Started - What's and Entity](/docs/entity/getting-started#whats-an-entity) to know more.

## List Entity

### Entity name

First, let's set the name for the entity:

```js
// src/domain/entities/list.js
const { entity, field } = require('@herbsjs/herbs')

const List = entity('List', {})
```

### Entity fields

Now, we're going to set the fields for the List entity:

```js
// src/domain/entities/list.js
const { entity, field } = require('@herbsjs/herbs')
const { Item } = require('./item')

const List = entity('List', {
    id: field(Number),
    name: field(String),
    items: field([Item]),
})
```

### Entity fields default value

May be interesting to have default values for some entities. For example, we want to have an empty array as the default value for `items` field:

```js
// src/domain/entities/list.js
const { entity, field } = require('@herbsjs/herbs')
const { Item } = require('./item')

const List = entity('List', {
    id: field(Number),
    name: field(String),
    items: field([Item], { default: () => [] }),
})
```

> Learn more about [default values](/docs/entity/features#default-value).

### Entity fields validation

Once we have the fields set, we may want to implement validation to them:

```js
// src/domain/entities/list.js
const { entity, field } = require('@herbsjs/herbs')
const { Item } = require('./item')

const List = entity('List', {
    id: field(Number, {
        validation: {
            presence: true,
            numericality: {
                greaterThan: 0,
                onlyInteger: true
            }
        }
    }),
    name: field(String, {
        validation: {
            presence: true,
            length: { minimum: 3 },
        }
    }),
    items: field([Item], { default: () => [] }),
})
```

> Learn more about [validations with Herbs](/docs/entity/validation).

## Item Entity

Let's apply the same concepts to create the Item entity:

```js
// src/domain/entities/item.js
const { entity, field } = require('@herbsjs/herbs')

entity('Item', {
    id: field(Number, {
        validation: {
            presence: true,
            numericality: {
                greaterThan: 0,
                onlyInteger: true
            }
        }
    }),
    description: field(String, {
        validation: {
            presence: true,
            length: { minimum: 3 }
        }
    }),
    isDone: field(Boolean, {
        default: false
    }),
    position: field(Number, {
        validation: {
            presence: true
        }
    })
})
```
