---
id: features
title: Entity Features
sidebar_label: Features
slug: /entity/features
---
  
## Creating an Entity

`entity(name, body)`, where:

- `name`: entity name.

- `body`: object containing entity structure: fields and methods.

- return: a Herbs entity class.

Example:

```javascript
const { entity, field, id } = require('@herbsjs/herbs')

const Customer = 
    entity('Customer', {
        id: id(Number),
        name: field(String),
        isVIP() {
            ...
        }
    })

const aCustomer = new Customer()
```

### Fields

Defines the fields (properties) of an entity.

`field(type, options)`, where:

- `type`: a scalar (JavaScript) type or a custom type.

    Ex: `field(String)`. 

    In order to define a field that holds an array instead of a single value use `[type]`. 
    
    Ex: `field([String])`.

- `options`: defines the field options (ex: validations, default value, etc.). 

    Ex: `field(Number, { validation: { presence: true } })`

- return: an entity field definition instance.

Example:

```javascript
const Order = 
    entity('Order', {
    id: id(Number, {
        validation: { presence: true, length: { minimum: 3 } }
    }),
    date: field(Date),
    items: field([OrderItems]),
    ...
})
```

### ID Fields

Defines a fields as ID of an entity.

```javascript
// The explicit way
const User =
    entity('User', {
        id: field(Number, { isId: true }),
        ...
    })

// The short way
const User =
    entity('User', {
        id: id(Number),
        ...
    })
```

It is allowed to have one or many ID fields on a entity. 

To access the metadata:

```javascript

const user = new User()

//should be equals ```true```
user.__proto__.meta.schema.id.options.isId

```

### Scalar types

A field in an entity can have basic types, the same as those used by JavaScript:

`Number`: double-precision 64-bit binary format IEEE 754 value

`String`: a UTF‐16 character sequence

`Boolean`: true or false

`Date`: represents a single moment in time in a platform-independent format

`Object`: the Object class represents a generic reference value type

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

For complex types, with deep relationship between entities, a field can have an entity type:

```javascript
const Plan = 
    entity('Plan', {
        ...
    })

const User = 
    entity('User', {
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
        tags: field([String])
    })
```

For complex types, with deep relationship between entities, a field can contain a list of entity type:

```javascript
const Plan = 
    entity('Plan', {
        ...
    })

const User = 
    entity('User', {
        ...
        plans: field([Plan])
    })
```

### Default value

It is possible to define a default value when an entity instance is initiated.

```javascript
const User = 
    entity('User', {
        ...
        hasAccess: field(Boolean, { default: false })
    })


const user = new User()
user.hasAccess // false
```

If the default value is a `function`, it will call the function and it will return the value as default value:

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

The values of an entity fields can be validated against the fields types or values validations.

### Check Validation

`instance.isValid()`: returns `true` if all the validations passed. It calls `.validate()` internally.

`instance.validate()`: processes the validation and loads all errors into `.errors`.

`instance.errors`: list of errors.

```javascript
const User = 
    entity('User', {
        name: field(String),
    })

const user = new User()
user.name = "Joe"
user.validate() 
user.errors // {}
user.isValid() // true
```

**ID Validation**

It is possible to ignore or only validate [ID fields](#id-fields) using `.isValid({ exceptIDs: true })` or `.isValid({ onlyIDs: true })`. 

`exceptIDs` can be useful for creation use cases when the entity IDs start as `null` or `undefined` and later on they are set to a valid value. 

`onlyIDs` can be useful, for instance, when there is a reference to an entity and only the IDs are known.

**Reference Validation**

It is possible to send validation options only to [reference fields](#entity-type) using `.isValid({ references: { onlyIDs: true } })` or `.isValid({ references: { exceptIDs: true } })`.

The reference validation is useful, for instance, on creation use cases when the entity IDs are unknown and for the reference fields only the IDs are needed.

```js
const Product = 
    entity('Product', {
        id: id(Number),
        name: field(String),
        category: field(Category),
    })

const product = Product.fromJSON({ name: "Product 1", category: { id: 1 } })

product.isValid({ exceptIDs: true, references: { onlyIDs: true } })
```

### Type Validation

It is possible to validate the type of a value .

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

You can also simplify your validation method using `isValid()` method that executes a validation for you entity and returns true/false in a single execution.

```javascript

const Plan =
    entity('Plan', {
        ...
        monthlyCost: field(Number),
    })

const plan = new Plan()
plan.plan.monthlyCost = true
plan.isValid() // false
plan.errors // { monthlyCost: [ wrongType: 'Number' ] }

```

### Value Validation

It is possible to validate values through pre-existing validators or custom validators.

Use `{ validation: ... }` to specify the [validators](/docs/entity/validation).

```javascript
const User = 
    entity('User', {
        ...
        password: field(String, {
            validation: {
                presence: true,
                length: { minimum: 6 }
            }
        })
    })

const user = new User()
user.password = '1234'
user.validate() 
user.errors // { password: [ { isTooShort: 6 } ] }
user.isValid() // false
```

## Metadata

### Fields metadata

It is possible to access the fields metadata of an entity through the `schema.fields` static property:

```javascript

const Order = entity('Order', {
    id: id(Number, {
        validation: { presence: true, length: { minimum: 3 } }
    }),
    date: field(Date),
    items: field([OrderItems])
})

const orderFields = Order.schema.fields

console.log(orderFields)
// [
//   Field {
//     name: 'id',
//     type: [Function: Number],
//     options: { validation: [Object], isId: true },
//     _validations: null
//   },
//   Field {
//     name: 'date',
//     type: [Function: Date],
//     options: {},
//     _validations: null
//   },
//   Field {
//     name: 'items',
//     type: [ [class OrderItem extends BaseEntity] ],
//     options: {},
//     _validations: null
//   }
// ]
```

### Ids metadata
It is possible to access the ids metadata of an entity by the `schema.ids` static property:

```javascript

const User = entity('User', {
    id: id(Number),
})

const userIds = User.schema.ids

console.log(userIds)

// [
//   Field {
//     name: 'id',
//     type: [Function: Number],
//     options: { isId: true },
//     _validations: null
//   }
// ]

```

## Serialization

### fromJSON(value)

Returns a new instance of a entity based on a object or a string.

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

By default, `fromJSON` serializes only keys that have been defined in the entity as fields. If you want to add other keys during serialization, use `.fromJSON(data, { allowExtraKeys: true })`.

By default, `fromJSON` **default field** values will be applied for keys not present in `value`.


### JSON.stringify(entity)

To serialize an entity to JSON string use `JSON.stringify` or `entity.toJSON` function.

```javascript
const json = JSON.stringify(user) // { "name": "Beth" }
```

By default, `toJSON` serializes only keys that have been defined in the entity. If you want to add other keys during serialization, use `entity.toJSON({ allowExtraKeys: true })`.

## Parse

### tryParse(value)

After load an entity with data (from JSON, database, etc), it is not guaranteed that the data conforms to the entity fields types.

`tryParse` is a helper function that tries to parse the data to the entity fields types.

The parser has a conservative approach. For the most standard javascript types, it will try to parse the value to the expected type. For example, if the field is a `Number` and the value is '1' (`String`), it will be parsed to 1 (`Number`). However, types like `Date` or `Array` can generate non expected results. In order to avoid this, the parser will avoid non trivial conversions.

For `Date` fields, the parser will try to parse the value only if the string "looks like" a date. For example, if the value is `2019-01-01` (just an example), it will be parsed to a `Date` object. However, if the value is `1`, it will not be parsed. Many date formats are supported.

```javascript
const User = 
    entity('User', {
        name: field(String),
        age: field(Number)
        active: field(Boolean)
        created: field(Date)
    })

const user = User.fromJSON({ name: 'Beth', age: '42', active: 'true', created: '2019-01-01' })
user.name // 'Beth'
user.age // '42'
user.active // 'true'
user.created // '2019-01-01'

user.tryParse()
user.name // 'Beth'
user.age // 42
user.active // true
user.created // Date('2019-01-01')
```

## Instance Type Check - `Entity.parentOf`

Checks if a instance is the same type from its parent entity class (similar to `instanceOf`).

```javascript
        const User = entity('User', {...})
        const Customer = entity('Customer', {...})

        const aUser = new User()
        const aCustomer = new Customer()
        
        User.parentOf(aUser) // true
        User.parentOf(aCustomer) // false
```

## Entity Type Check - `entity.isEntity`

Checks if an object is a Gotu Entity class.

```javascript
    const { entity } = require('@herbsjs/herbs')

    const AnEntity = entity('A entity', {})

    const instance1 = new AnEntity()
    
    entity.isEntity(AnEntity) // true
    entity.isEntity(Object) // false
```
