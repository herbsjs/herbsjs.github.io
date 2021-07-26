---
id: create-entity
title: 2. Creating Entities
sidebar_label: 2. Creating Entities
slug: /tutotial/create-entity
---

Entities are the natural place for abstractions from your domain. Usually big things like User, Order, Contract Agreement, Shopping Cart, Schedule, etc are entities.

Entities have properties (fields), actions (methods) and often is uniquely identified by an ID.

> Refer to [Getting Started - What's and Entity](/docs/entity/getting-started#whats-an-entity) to know more.

The most important entity is the User, so we are going to create it.

## List Entity

### Entity name

First, let's set the name for the entity:

```js
// src/domain/entities/list.js
const { entity, field } = require('@herbsjs/herbs')

const User = entity('User', {})
```

### Entity fields

Now, we're going to set the fields for the List entity:

```js
// src/domain/entities/list.js
const { entity, field } = require('@herbsjs/herbs')

const User = entity('User', {
    id: field(Number),
    nickname: field(String),
    password: field(String),
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

Once we have the fields set, we may want to implement validation to them

The validation is passed as an `Object` and it can have different kinds of parameters, such as presence, length and numericality. For example:

```js
// src/domain/entities/list.js
const { entity, field } = require('@herbsjs/herbs')
const { Item } = require('./item')

const List = entity('List', {
    id: field(Number, {
        validation: {
            // The field MUST be present
            presence: true,
            numericality: {
                // Must be greater than 0
                greaterThan: 0,
                // Cannot be a float
                onlyInteger: true
            }
        }
    }),
    name: field(String, {
        validation: {
            presence: true,
            // Here, the name MUST have 3 letters at least
            length: { minimum: 3 },
        }
    }),
    items: field([Item], { default: () => [] }),
})
```

> Learn more about [validations with Herbs](/docs/entity/validation).

## Item Entity

Let's apply the same concepts to create the Item entity. But now, let's have a more advanced validation.

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
