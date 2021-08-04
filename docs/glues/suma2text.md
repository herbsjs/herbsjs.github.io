---
id: suma2text
title: Suma2text
sidebar_label: Suma2text
slug: /glues/suma2text
---

![CI build](https://github.com/herbsjs/suma2text/workflows/CI%20build/badge.svg) [![codecov](https://codecov.io/gh/herbsjs/suma2text/branch/master/graph/badge.svg)](https://codecov.io/gh/herbsjs/suma2text)

suma2text it's a tool to parse error codes to string, you can use in all your solution.

Suma and suma2text native, you can translate all suma error codes, one by one or all entity error array.

### Installing
```
  npm install @herbsjs/suma2text
```

### Using

If your use is simple, you can just require suma2text, and execute this configure function, by default the language will be English from the united states (ISO CODE en-US).

```javascript
const suma2text = require('@herbsjs/suma2text')()

const suma2text.toText({ notDefined: true })
/*
    Not defined
*/
```

You also can add a different language or customize the existing, just pass the following parameters on require function.

```javascript
const suma2text = require('@herbsjs/suma2text')({
    useDefault: 'ts-ME',
    languages: [{
            name: 'ts-ME',
            definitions: {
                types: [
                    { key: 'Number',  translation: 'Numeric' },
                    { key: 'String',  translation: 'Characters'}
                ]
                codes: [
                    { key: 'cantBeEmpty', translation: 'Wont should be empty' },
                    { key: 'wrongType', translation: 'Please the value correct is {0}' }
                ]
            }
        },
        {
            name: 'en-US',
            definitions: {
                types: [
                    { key: 'Number', translation: 'Digit' },
                    { key: 'String', translation: 'Char Array' }
                ],
                codes: [
                    { key: 'cantBeEmpty', translation: 'Wont should be empty' },
                    { key: 'wrongType', translation: 'The value correct is {0}'}
                ]
            }
        }
    ]
})

//fully custumized language
const suma2text.toText({ wrongType: String }, 'ts-ME')
/*
   Please the value correct is Characters
*/
const suma2text.toText({ notGreaterThan: 10 }, 'ts-ME')
/*
   Will be thrown a not implemented code exception
*/

//existing language, but some custumization
const suma2text.toText({ wrongType: String }, 'en-US')
/*
   The value correct is Char Array
*/
const suma2text.toText({ notGreaterThan: 10 }, 'en-US')
/*
   Not greater than 10
*/

```
But, the perfect choice is to use whit herbs.js, all suma codes are integrated into here, and we made for it, you can pass all your validation in a suma2text class, validate, and just show the results in your presentation layer, let's see how.
```javascript
const User =
    entity('User', {
        name: field(String),
        plan: field(Plan)
    })

const user = new User()
user.name = 42
user.plan.monthlyCost = true
user.validate()
user.errors // { name: [ {wrongType: 'String'} ], plan: { monthlyCost: [ {wrongType: 'Number'}  } }

const suma2text = require('@herbsjs/suma2text')()

const englishUserErrors = suma2text.errorsToText(user.errors)
/*
    {
        name: ['Wrong type, the correct type is String']
        plan: {
            monthlyCost: ['Wrong type, the correct type is Plan']
        }
    }
*/
const portugueseUserErrors = suma2text.errorsToText(user.errors, 'pt-BR')
/*
    {
        name: ['Foi definido um tipo incorreto, o valor esperado era Texto']
        plan: {
            monthlyCost: ['Foi definido um tipo incorreto, o valor esperado era Plan']
        }
    }
*/
```

## TODO

Language localisation:
- [ ] Arabic
- [ ] Bangla
- [ ] Chinese
- [ ] Dutch
- [x] English ('en-US')
- [ ] French
- [ ] German
- [ ] Italian
- [ ] Korean
- [X] Portuguese ('pt-BR')
- [ ] Spanish
- [ ] Swedish   
- [ ] Tamil


Text Formatting:
- [X] Primitive types
- [X] Strings types
- [X] Number types 
- [ ] Date Type and formating style
- [ ] User Class instances types


### Contribute
Come with us to make an awesome *suma2text*.

Now, if you do not have the technical knowledge and also have intended to help us, do not feel shy, [click here](https://github.com/herbsjs/suma2text/issues) to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)

If you would like to help contribute to this repository, please see [CONTRIBUTING](https://github.com/herbsjs/suma2text/blob/master/.github/CONTRIBUTING.md)

### The Herb

suma2text suma2text has been used historically to relieve congestion from upper respiratory infections and colds and for wound healing. It is very popular for treating varicose veins and memory loss.


https://www.herbslist.net/

https://en.wikipedia.org/wiki/Centella_asiatica

### License

**suma2text** is released under the
[MIT license](https://github.com/herbsjs/suma2text/blob/master/LICENSE.md)
