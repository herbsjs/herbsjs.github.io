---
id: features
title: Features
sidebar_label: Features
slug: /entity/features
---

// WIP

## Creating an Entity

`entity(name, body)`, where:

- `name`: name of the entity.

- `body`: object containing the entity structure: fields and methods.

- return: a Herbs entity class.

Example:

```javascript
const { entity, field } = require('gotu')

const Customer = 
    entity('Customer', {
        id: field(Number),
        name: field(String),
        isVIP() {
            ...
        }
    })

const aCustomer = new Customer()
```

## Fields

Defines the fields (properties) of an entity.

`field(type, options)`, where:

- `type`: a scalar (JavaScript) type or a custom type.

    Ex: `field(String)`. 

    In order to define a field that holds an array instead of a single value use `[type]`. 
    
    Ex: `field([String])`.

- `options`: defines the field options (ex: validations, default value, etc). 

    Ex: `field(Number, { validation: { presence: true } })`

- return: a entity field definition instance.

Example:

```javascript
const Order = 
    entity('Order', {
    id: field(Number, {
        validation: { presence: true, length: { minimum: 3 } }
    }),
    date: field(Date),
    items: field([OrderItems]),
    ...
})
```

### Scalar types

A field in an entity can be of basic types, the same as those used by JavaScript:

`Number`: double-precision 64-bit binary format IEEE 754 value

`String`: a UTF‐16 character sequence

`Boolean`: true or false

`Date`: represents a single moment in time in a platform-independent format.

```javascript
const User = 
    entity('User', {
        name: field(String),
        lastAccess: field(Date),
        accessCount: field(Number),
        hasAccess: field(Boolean)
    })
```

### Entity type

For complex types, with deep relationship between entities, a field can be of entity type:

```javascript
const Plan = 
    entity('Plan', {
        ...
        monthlyCost: field(Number),
    })

const User = entity('User', {
        ...
        plan: field(Plan)
    })
```

### Array field type

In order to define a field that holds an array instead of a single value use `field([String])`. 
    
```javascript
const Post =
    entity('Post', {
        ...
        tags: field(String)
    })
```

For complex types, with deep relationship between entities, a field can contain a list of entity type:

```javascript
const Plan = 
    entity('Plan', {
        ...
        monthlyCost: field(Number),
    })

const User = 
    entity('User', {
        ...
        plans: field([Plan])
    })
```

### Default value

It is possible to define a default value when an entity instance is initiate.

```javascript
const User = 
    entity('User', {
        ...
        hasAccess: field(Boolean, { default: false })
    })


const user = new User()
user.hasAccess // false
```

If the default value is a `function` it will call the function and return the value as default value:

```javascript
const User = 
    entity('User', {
        ...
        hasAccess: field(Boolean, { default: () => false })
    })


const user = new User()
user.hasAccess // false
```

When not specified, the default value (for scalar and entity types) is `undefined`.

For reference types (like arrays) you **must** use functions in order to create a new object for every instance.

❌ Wrong: `items: field([Item], { default: [] })`

✅ Right:  `items: field([Item], { default: () => [] })`

## Methods

Defines the methods (actions) of an entity.

Example:

```javascript
const User =
    entity('User', {
        ...
        role: field(String),
        hasAccess() { return this.role === "admin" },
    })

const aUser = new User()
aUser.role = "admin"
const canAccess = aUser.hasAccess()
```

## Validation

The values of an entity fields can be validated against the fields types or its custom validations.

### Type Validation

```javascript

const Plan = 
    entity('Plan', {
        ...
        monthlyCost: field(Number),
    })

const User = 
    entity('User', {
        name: field(String),
        plan: field(Plan)
    })

const user = new User()
user.name = 42
user.plan.monthlyCost = true
user.validate() 
user.errors // { name: [ wrongType: 'String' ], plan: { monthlyCost: [ wrongType: 'Number' ] } }
user.isValid() // false
```

You can also simplify you validation method using `isValid()` method that execute validate for you entity and return true/false in a single execution.

### Custom Validation

For custom validation Gotu uses Herbs JS [Suma](https://github.com/herbsjs/suma) library under the hood. It has no message defined, only error codes.

Use `{ validation: ... }` to specify a valid Suma validation (sorry) on the field definition.

```javascript
const User = 
    entity('User', {
        ...
        password: field(String, validation: { 
            presence: true, 
            length: { minimum: 6 }
        })
    })

const user = new User()
user.password = '1234'
user.validate() 
user.errors // { password: [ { isTooShort: 6 } ] }
user.isValid // false
```


## Serialization

### fromJSON(value)

Returns a new instance of a entity

```javascript
const User = 
    entity('User', {
        name: field(String)
    })

// from object
const user = User.fromJSON({ name: 'Beth'})
// or string
const user = User.fromJSON(`{ "name": "Beth"}`)
```

By default `fromJSON` serializes only keys that have been defined in the entity. If you want to add other keys during serialization, use `.fromJSON(data, { allowExtraKeys: true })`.

### JSON.stringify(entity)

To serialize an entity to JSON string use `JSON.stringify` or `entity.toJSON` function.

```javascript
const json = JSON.stringify(user) // { "name": "Beth" }
```

By default `toJSON` serializes only keys that have been defined in the entity. If you want to add other keys during serialization, use `entity.toJSON({ allowExtraKeys: true })`.


## Instance Type Check - Entity.parentOf

Check if a instance is the same type from its parent entity class (similar to `instanceOf`)

```javascript
        const AnEntity = entity('A entity', {})
        const AnSecondEntity = entity('A second entity', {})

        const instance1 = new AnEntity()
        const instance2 = new AnSecondEntity()
        
        AnEntity.parentOf(instance1) // true
        AnEntity.parentOf(instance2) // false
```

## Entity Type Check - entity.isEntity

Check if an object is a Gotu Entity class

```javascript
        const AnEntity = entity('A entity', {})

        const instance1 = new AnEntity()
        
        entity.isEntity(AnEntity) // true
        entity.isEntity(Object) // false
```