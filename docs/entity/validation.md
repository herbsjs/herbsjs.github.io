---
id: validation
title: Validations
sidebar_label: Validations
slug: /entity/validation
---

The values of an entity fields can be validated against the fields types or values validations.

## Presence

`presence` (boolean) - Validates that the specified value is not empty.

```javascript
const User = 
    entity('User', {
        ...
        password: field(String, {
            validation: { presence: true }
        })
    })

const user = new User()
user.password = ''
user.isValid() // false
user.errors // {"password":[{"cantBeEmpty":true}]}
```

## Allow Null

`allowNull` (boolean) - Validates that the specified value is not `null` or `undefined`.

```javascript
const User = 
    entity('User', {
        ...
        password: field(String, {
            validation: { allowNull: false }
        })
    })

const user = new User()
user.password = null
user.isValid() // false
user.errors // {"password":[{"cantBeNull":true}]}
```

## presence vs allowNull

|               | presence: true    | allowNull: false| 
| ------------- | ------------------| ----------------|
| 'Text'        |       ✅          |       ✅       | 
| 123           |       ✅          |       ✅       |
| 0             |       ✅          |       ✅       |
| ' '           |       ❌          |       ✅       |
| ''            |       ❌          |       ✅       |
| []            |       ❌          |       ✅       |
| {}            |       ❌          |       ✅       |
| null          |       ❌          |       ❌       |  
| undefined     |       ❌          |       ❌       |  


## Contains

`contains` -  The contains validator is useful for validating allowance or restriction in certain values.
It checks that the given value exists in the target given by the **allowed** or  **notAllowed** option.

You can specify the validator as a list, string or as an object (in which case the keys of the object are used).

**allowed option examples:**

Array Example:

```javascript
const TShirt = 
    entity('TShirt', {
        ...
        size: field(String, {
            validation: { contains: { allowed: ["small", "medium", "large"] } } 
        })
    })

const tshirt = new TShirt()
tshirt.size = 'xlarge'
tshirt.isValid() // false
tshirt.errors // {"size":[{"notContains":["small","medium","large"]}]}
```

String Example:

```javascript
const Post = 
    entity('Post', {
        ...
        body: field(String, {
            validation: { contains: { allowed: "lorem ipsum dolor" } }
        })
    })

const post = new Post()
post.body = 'hello'
post.isValid() // false
post.errors // {"body":[{"notContains":"lorem ipsum dolor"}]}
```

**notAllowed option examples:**

Array Example:

```javascript
const TShirt = 
    entity('TShirt', {
        ...
        size: field(String, {
            validation: { contains: { notAllowed: ["xsmall", "xlarge"] } } 
        })
    })

const tshirt = new TShirt()
tshirt.size = 'xlarge'
tshirt.isValid() // false
tshirt.errors // {"size":[{"contains":["xsmall","xlarge"]}]}
```

String Example:

```javascript
const Post = 
    entity('Post', {
        ...
        body: field(String, {
            validation: { contains: { notAllowed: "hello world" } }
        })
    })

const post = new Post()
post.body = 'hello'
post.isValid() // false
post.errors // {"body":[{"contains":"hello world"}]}
```

## Length

Validates the length of the value. 

It is possible to specify length constraints in different ways:

`minimum` (number) - The value cannot have less than the specified length

`maximum` (number) - The value cannot have more than the specified length

`is` (number) - The value length must be equal to the given length

```javascript
const Post = 
    entity('Post', {
        title: field(String, {
            validation: { length: { is: 10 } }
        }),
        body: field(String, {
            validation: { length: { minimum: 3, maximum: 140 } }
        })
    })

const post = new Post()
post.title = 'hello'
post.body = 'hi'
post.isValid() // false
post.errors // {"title":[{"wrongLength":10}],"body":[{"isTooShort":3}]}
```

## Numericality

Validates constraints to acceptable numeric values. 

The value must be a valid `Number`. 

`equalTo` (number) - Specifies the value must be equal to the supplied value. 

`greaterThan` (number) - Specifies the value must be greater than the supplied value. 

`greaterThanOrEqualTo` (number) - Specifies the value must be greater than or equal to the supplied value.

`lessThan` (number) - Specifies the value must be less than the supplied value.

`lessThanOrEqualTo` (number) - Specifies the value must be less than or equal to the supplied value. 

`onlyInteger` (boolean) - To specify that only integral numbers are allowed.

```javascript
const Order =
    entity('Order', {
        price: field(Number, {
            validation: { numericality: { greaterThan: 1 } }
        })
    })

const order = new Order()
order.price = 0
order.isValid() // false
order.errors // {"price":[{"notGreaterThan":1}]}
```

## Datetime

Validates constraints to acceptable date and time values.

It must be a valid `Date` time JS object. Use `{ type: Date }` to validate if the value is a valid JS `Date` object.

`before` (date) - A date must be before this value to be valid 

`after` (date) - A date must be after this value to be valid 

`isAt` (date) - A date must be equal to value to be valid 

```javascript
const Order =
    entity('Order', {
        deliveredAt: field(Date, {
            validation: { datetime: { before: new Date('2010-01-01') } }
        })
    })

const order = new Order()
order.deliveredAt = new Date('2011-01-01')
order.isValid() // false
order.errors // {"deliveredAt":[{"tooLate":"2010-01-01T00:00:00.000Z"}]}
```

## E-mail

`email` (bool) - The email validator attempts to make sure the input is a valid email. Validating emails is tricky business due to the complex rules of email address formatting.

For example **john.doe@gmail** is a perfectly valid email but it's most likely just the case that John has forgotten to write .com at the end.

```javascript
const Customer =
    entity('Customer', {
        email: field(String, {
            validation: { email: true } 
        })
    })

const customer = new Customer()
customer.email = 'just@notright@example.com'
customer.isValid() // false
customer.errors // {"email":[{"invalidEmail":true}]}
```

## Format

`format` (regex) - The format validator will validate a value against a regular expression of your choosing.

```javascript
const Customer =
    entity('Customer', {
        ssn: field(String, {
            validation: {
                format: /^([0-9]{3}[-]*[0-9]{2}[-]*[0-9]{4})*$/ // or you can use new RegExp('...') 
            }
        })
    })

const customer = new Customer()
customer.ssn = '1234'
customer.isValid() // false
customer.errors  // {"ssn":[{"invalidFormat":true}]}
```

## URL

 The URL validator ensures that the input is a valid URL. Validating URLs are pretty tricky but this validator is inspired on a gist that can be found [`here`](https://gist.github.com/dperini/729294). 

 The following options are supported: 

`schemes` - (array of string) A list of schemes to allow. If you want to support any scheme you can use a regexp here (for example **[".+"]**). The default value is **["http", "https"]**. 

`allowLocal` (boolean) - A boolean that if true allows local hostnames such as **10.0.1.1** or localhost. The default is **false**. 

`allowDataUrl` (boolean) - A boolean that if true allows data URLs as defined in [`RFC 2397`](https://tools.ietf.org/html/rfc2397). The default is **false**

```javascript
const Customer =
    entity('Customer', {
        website: field(String, {
            validation: { url: true }
        }),
        ftp: field(String, {
            validation: { url: { schemes: ['ftp'] } }
        })
    })

const customer = new Customer()
customer.website = 'google.com'
customer.ftp = 'http://google.com'
customer.isValid() // false
customer.errors  // {"website":[{"invalidURL":true}],"ftp":[{"invalidURL":true}]}
```

## Null Values

The `type`, `length`, `numericality`, `format` and `datetime` validators won't validate a value if it's `null` or `undefined`.

To ensure that your value is not null, use `allowNull: false` or `presence: true`.