---
id: gettingStarted
title: Getting Started with Entities
sidebar_label: Getting Started
slug: /entity/getting-started
---

## What's an Entity?

Entities are the natural place for abstractions from your domain. Usually big things like User, Order, Contract Agreement, Shopping Cart, Schedule, etc. are entities. 

Entities have properties (fields), actions (methods) and often is uniquely identified by an ID.

Some entities in your domain need to be retrieved and persisted from a repository (ex: database). For that you can use a glue like [herbs2knex](/docs/glues/Herbs2knex).

## Installing

```
 npm install @herbsjs/herbs
```

## Using

This is an example of how to define an entity:

`entities/user.js`:

```javascript
const { entity, field } = require('@herbsjs/herbs')

const User = 
    entity('User', {
        id: field(Number),
        name: field(String),
        lastAccess: field(Date),
        features: field([Feature]),
        plan: field(Plan),
        isAdmin() {
            return false
        }
    })
```

Here is an example of how to create, load and validate an entity:

```javascript
const user = new User()
user.name = "Beth"
user.plan.monthlyCost = 10
user.features = [ 
    new Feature(),
    new Feature(),
    new Feature()
]
user.validate()
```