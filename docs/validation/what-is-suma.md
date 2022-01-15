---
id: what-suma
title: What's Suma?
sidebar_label: What's Suma?
slug: /validation/what-suma
---

Suma helps with single value validations.

Extensible, test covered and errors code only!

Suma does not validate schema or objects, just single values. For schema validation take a look at [`herbjs/gotu`](https://github.com/herbsjs/gotu).

### Installing
 ```javascript
    $ npm install @herbsjs/suma
 ```
### Using

```javascript
const { validate } = require('@herbsjs/suma')

const value = null
const validations = { presence: true }
const result = validate(value, validations)
/* {
    value: null,
    errors: [{ cantBeEmpty: true }]
} */
```

### Custom functions

Execute custom functions to specific validations cases

`propName` (string) - Name of the validation rule returned on error - *this is optional, see below example of usage*

`validation` (function: boolean) - Function that will be called with value argument *this is optional, see below example of usage*

```javascript

const cardNumber = "123467890123456"
// Single function validation with valid value
const validations = { custom: { invalidCardNumber: (value) => value.length === 16 } }
const result = validate(cardNumber, validations);
/* {
    value: '123467890123456',
    errors: []
} */
//

const cardNumber = "1234"

// Single function validation with invalid value
const validations = { custom: { invalidCardNumber: (value) => value.length === 16 } }
const result = validate(cardNumber, validations);
/* {
    value: '1234',
    errors: [{ "invalidCardNumber": true }]
} */
//

// Multiple functions validation with invalid value
const validations = {
    custom: {
        invalidCardNumber: (value) => value.length === 16,
        invalidDigit: (value) => value[0] !== "2",
    },
}
const result = validate(cardNumber, validations)
/* {
    value: '1234',
    errors: [
        {  "invalidCardNumber": true },
        {  "invalidDigit": true },
    }]
} */
//


// Multiple functions validation with parcial valid values
const cardNumber = "12345678910111213"

const validations = {
    custom: {
        invalidCardNumber: (value) => value.length === 16,
        invalidDigit: (value) => value[0] !== "2",
    },
}
const result = validate(cardNumber, validations)
/* {
    value: '12345678910111213',
    errors: [
        {  "invalidDigit": true },
    }]
} */
//

```

You can also extract validation for variables, if you want to make your code more reusable and customizable

```javascript

// Single Validation with custom propName

const cardNumber = "1234"

const propName = "invalidCardNumber";
const validation = (value) => value.length === 16
const validations = {
    custom: { [propName]: validation }, }

const result = validate(cardNumber, validations);
/* {
    value: '1234',
    errors: [{ "invalidCardNumber": true }]
} */
//

```

### Null Values

The `type`, `length`, `numericality`, `format` and `datetime` validators won't validate a value if it's `null` or `undefined`.

To ensure your value is not null, use `allowNull: false` or `presence: true`.

