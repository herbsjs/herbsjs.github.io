---
id: whatis
title: What's a entity?
sidebar_label: What's a entity?
slug: /entity
---

#### What is it?

Entities: they are the first natural place we should aim to place business logic in domain-driven applications.

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



## TODO

- [X] Field basic JS type definition and validation (ex: "name": String)
- [X] Field entity type definition and validation (ex: "user": User)
- [ ] Field enum type definition and validation (ex: "paymentType": ['CC', 'Check'])
- [X] Field list type definition and validation (ex: "users": [User])
- [X] Entity custom methods (ex: payment.calculate())
- [X] Default values
- [ ] Entity (complex) validation (ex: payment.validate() )
- [X] Field validation error message (ex: payment.errors )
- [X] Field validation error code (ex: payment.errors )
- [X] Entity hidrate (ex: fromJson)
- [X] Entity serialize (ex: toJson)
- [X] Extend / Custom field validation (ex: email, greater than, etc)
- [ ] Valitation contexts (ex: Payment validation for [1] credit card or [2] check)
- [X] Conditional Validation (ex: if email is present, emailConfirmation must be present)
- [ ] Entities Inheritance (schema and validations inheritance)

### Contribute

Come with us to make an awesome *Gotu*.

Now, if you do not have technical knowledge and also have intend to help us, do not feel shy, [click here](https://github.com/herbsjs/gotu/issues) to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)

If you would like to help contribute to this repository, please see [CONTRIBUTING](https://github.com/herbsjs/gotu/blob/master/.github/CONTRIBUTING.md)

### The Herb

Gotu Kola has been used historically to relieve congestion from upper respiratory infections and colds and for wound healing. It is very popular for treating varicose veins and memory loss.

https://www.herbslist.net/

https://en.wikipedia.org/wiki/Centella_asiatica

### License

**Gotu** is released under the
[MIT license](https://github.com/herbsjs/gotu/blob/master/LICENSE.md).
