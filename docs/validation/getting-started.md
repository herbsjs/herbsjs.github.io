---
id: what-suma
title: Getting Started with Validation
sidebar_label: Getting Started
slug: /validation/getting-started
---

Herbs comes with a library to help validate single single value which is extensible, test covered and errors code only. 

It's internally used to validate entities fields and use cases requests, but can be used to validate values within your domain.

This is not intended to validate schema or objects, just single values. For schema validation, please check [entities](/docs/entity/getting-started).

### Installing
 ```bash
$ npm install @herbsjs/herbs
 ```
### Using

```javascript
const { validate } = require('@herbsjs/herbs')

const value = null
const validations = { presence: true }
const result = validate(value, validations)
/* {
    value: null,
    errors: [{ cantBeEmpty: true }]
} */
```

