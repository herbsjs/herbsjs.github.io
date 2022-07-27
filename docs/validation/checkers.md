---
id: checkers
title: Checkers
sidebar_label: Checkers
slug: /validation/checkers
---

Checkers allow users to validate data with simple functions


```javascript
const { checker } = require('@herbsjs/herbs')
```

## isFunction

Validates the the value is a function

```javascript
function sampleFunc () {}
const ret = checker.isFunction(sampleFunc)
console.log(ret)

/* Output: true */
```

## isDefined

Validates if the value is different from null or undefined

```javascript
const samples = [
    null,
    undefined,
    ''
]
for (const value of samples) {
    const ret = checker.isDefined(value)
    console.log(ret)    
}


/* Output: false, false, true */
```

## isArray

Validates if the value is a array

```javascript
const value = ['a', 'b', 'c']
const ret = checker.isArray(value)
console.log(ret)

/* Output: true */
```

## isIterable

Validates if the value is iterable

```javascript
const value =  [{ name: 'jhon', age: 35},{ name: 'marie', age: 29}]
const ret = checker.isIterable(value)
console.log(ret)

/* Output: true */
```

## isString

Validates if the value is a string

```javascript
const value =  'herbs validators'
const ret = checker.isString(value)
console.log(ret)

/* Output: true */
```

## isBoolean

Validates if the value is a boolean

```javascript
const value =  false
const ret = checker.isBoolean(value)
console.log(ret)

/* Output: true */
```

## isNumber

Validates if the value is a boolean

```javascript
const value =  152
const ret = checker.isNumber(value)
console.log(ret)

/* Output: true */
```

## isDate

Validates if the value is a date

```javascript
const value = new Date(1900, 5, 1)
const ret = checker.isDate(value)
console.log(ret)

/* Output: true */
```

## isRegExp

Validates if the value is a regex expression

```javascript
const value = /^[0-9]{8}$/
const ret = checker.isRegExp(value)
console.log(ret)

/* Output: true */
```

## isInstanceOf

Validates if the value is a instance of a defined type

```javascript
class CustomClass {}

const value = new CustomClass()
const ret = checker.isInstanceOf(value, CustomClass)
console.log(ret)

/* Output: true */
```

## isObject

Validates if the value is an object

```javascript
class SampleClass {}
const samples = [
    {},
    new Object(),
    new SampleClass(),
    [],
    'herbs',
    true
]
for (const value of samples) {
    const ret = checker.isObject(value)    
    console.log(ret)
}

/* Output: true, true, true, true, false, false */
```

## isEmpty

Validates if the value is empty

```javascript
const samples = [
    '',
    ' ',
    [],
    {},
    'herbs',
    22
]
for (const value of samples) {
    const ret = checker.isEmpty(value)
    console.log(ret)
}

/* Output: true, true, true, true, false, false */
```

## isValidFormat

Validates a regex expression to test a value

```javascript
const value = 45125
const ret = checker.isValidFormat(value, /^[0-9]{8}$/)
console.log(ret)

/* Output: true */
```

## isValidEmail

Validates if the value is an e-mail

```javascript
const value = 'herbs@email.com'
const ret = checker.isValidEmail(value)
console.log(ret)

/* Output: true */
```

## isValidURL

Validates if the value is an url

```javascript
const value = 'http://herbsjs.org'
const ret = checker.isValidURL(value)
console.log(ret)

/* Output: true */
```

## isValidJavascriptIdentifier

Validates if the value is a valid javascript identifier

```javascript
const value = 'herbs'
const ret = checker.isValidJavascriptIdentifier(value)
console.log(ret)

/* Output: true */
```


## isTooShort

Validates if the value is greater than a defined minimum value 

```javascript
const value = 'herbs'
const ret = checker.isTooShort(value, 3)
console.log(ret)

/* Output: true */
```

## isTooLong

Validates if the value is less than a defined maximum value

```javascript
const value = 'herbs'
const ret = checker.isTooLong(value, 10)
console.log(ret)

/* Output: true */
```

## isWrongLength

Validates if the value has a length equal to the defined value

```javascript
const value = 'herbs'
const ret = checker.isWrongLength(value, 5)
console.log(ret)

/* Output: true */
```

## isEqualTo

Validates if the first value is equals to second value

```javascript
const ret = checker.isEqualTo(1520, 1520)
console.log(ret)

/* Output: true */
```

## isGreaterThan

Validates if the first number is greater than second number

```javascript
const ret = checker.isGreaterThan(100, 50)
console.log(ret)

/* Output: true */
```

## isGreaterThanOrEqualTo

Validates if the first number is greater than or equals to second number

```javascript
const ret = checker.isGreaterThanOrEqualTo(100, 100)
console.log(ret)

/* Output: true */
```

## isLessThan

Validates if the first number is less than second number

```javascript
const ret = checker.isLessThan(50, 100)
console.log(ret)

/* Output: true */
```

## isLessThanOrEqualTo

Validates if the first number is less than or equals to second number

```javascript
const ret = checker.isLessThanOrEqualTo(100, 100)
console.log(ret)

/* Output: true */
```

## isInteger

Validates if the value is a integer number

```javascript
const ret = checker.isInteger(10)
console.log(ret)

/* Output: true */
```

## isBeforeThan

Validates if the first date is before than second date

```javascript
const ret = checker.isBeforeThan(new Date(1900, 2, 1), new Date(1991, 2, 1))
console.log(ret)

/* Output: true */
```

## isAfterThan

Validates if the first date is before than second date

```javascript
const ret = checker.isBeforeThan(new Date(1991, 2, 1), new Date(1900, 2, 1))
console.log(ret)

/* Output: true */
```

## isAt

Validates if the first date is equals to second date

```javascript
const ret = checker.isAt(new Date(1991, 2, 1), new Date(1991, 2, 1))
console.log(ret)

/* Output: true */
```

## contains

Validates if the value contains in the object or array

```javascript
const values = ['apple', 'orange']
const ret = checker.isAt(values, 'orange')
console.log(ret)

/* Output: true */
```

