---
id: gettingStarted
title: Getting started
sidebar_label: Getting started
slug: /entity/getting-started
---

// TODO

### Installing

```$ npm install gotu```

### Using

```javascript
const { entity, field } = require('gotu')

const Feature = 
        entity('Feature', {
            name: field(String),
            hasAccess: field(Boolean)
        })

const Plan = 
    entity('Plan', {
        name: field(String),
        monthlyCost: field(Number)
    })

const User = 
    entity('User', {
        name: field(String),
        lastAccess: field(Date),
        accessCount: field(Number),
        features: field([Feature]),
        plan: field(Plan),
    })

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