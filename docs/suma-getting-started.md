---
id: sumaDoc2
title: Getting started
sidebar_label: Getting started
slug: /suma/getting-started
---

### Installing
    $ npm install suma

### Using

```javascript
const { validate } = require('suma')

const value = null
const validations = { presence: true }
const result = validate(value, validations) 
/* {
    value: null,
    errors: [{ cantBeEmpty: true }]
} */
```

