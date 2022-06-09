---
id: create-entity
title: 3. Creating Entities
sidebar_label: 3. Creating Entities
slug: /tutorial/create-entity
---

## Introduction to the Entity concept

Entities are the natural place for abstractions from your domain. Usually, big things like User, Order, Contract Agreement, Shopping Cart, Schedule, etc. are entities.

Entities have properties (fields), actions (methods) and often is uniquely identified by an ID.

> Refer to [Getting Started - What's and Entity](/docs/entity/getting-started#whats-an-entity) to know more.

For this project, the most basic entity is the User. The CLI generates it out-of-the-box, so let's understand how it works:

## User Entity

#### Entity name

First, let's understand how is set the name for the entity:

```js
// src/domain/entities/user.js
const { entity, field } = require('@herbsjs/herbs')

// The entity name is first argument of `entity()`
const User = entity('User', {})
```

#### Entity fields

Now, we're going to see the fields for the User entity:

- **id**: The unique identifier for the user.
- **nickname**: The nickname for the user like "user123".
- **password**: The user's access password.

Within the entity fields properties, we have:

- name
- type
- default value (optionally)
- validation (optionally)

```js
// src/domain/entities/user.js
const { entity, field, id } = require('@herbsjs/herbs')

// The second argument is an object with the fields.
const User = entity('User', {
    // The key is the field name.
    // The value is the object type of
    // the field using the `field()`.

    id: id(Number),

    // Both the fields "nickname" and "password" are texts, therefore we are using `String`.
    nickname: field(String),
    password: field(String),
})
```

The types of fields are Scalar types, there are some of them:

- `Number`: double-precision 64-bit binary format IEEE 754 value
- `String`: a UTF‐16 character sequence
- `Boolean`: true or false
- `Date`: represents a single moment in time in a platform-independent format.

#### Entity fields default value

The CLI gives you the base, but you can go further.

May be interesting to have default values for some fields.

Just for exemple, imagine that we have a field `score` to store some kind of points to the user, we want this to be a number and to start with 0 as default value.

```js
// src/domain/entities/user.js
const { entity, field, id } = require('@herbsjs/herbs')

const User = entity('User', {
    id: id(Number),
    nickname: field(String),
    password: field(String),

    // Here we set the field. After the type we also pass an optional object with the key default as 0.
    score: field(Number, {
        default: 0
    }),
})
```

> Learn more about [default values](/docs/entity/features#default-value).

#### Entity fields validation

Once we have the fields set, we may want to implement validation to them

The validation is passed as an `Object` and it can have different kinds of parameters, such as presence, length and numericality. For example:

```js
// src/domain/entities/user.js
const { entity, field, id } = require('@herbsjs/herbs')

const User = entity('User', {
    id: id(Number, {
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
    nickname: field(String, {
        validation: {
            presence: true,
            // Here, the nickname MUST have 3 letters at least
            length: { minimum: 3 },
        }
    }),
    password: field(String),
})
```

> Learn more about [validations with Herbs](/docs/entity/validation).

---

Feel free to implement more fields and add different kinds of validation to it.

Now that we have the User entity, we are ready to go and use it, let's move on to Use Cases.
