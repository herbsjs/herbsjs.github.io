---
id: gettingStarted
title: Getting started
sidebar_label: Getting started
slug: /usecase/getting-started
---

### Installing

```$ npm install buchu```
### Using

Check the complete examples [here](https://github.com/herbsjs/buchu/tree/master/examples) or for a complete solution using Herbs [here](https://github.com/herbsjs/todolist-on-herbs).

usecases/addOrUpdateItem.js:

```javascript
const { entity, field } = require('gotu')
const Item = entity('Item', {
  id: field(Number),
  description: field(String),
  isDone: field(Boolean),
  position: field(Number)
})

const { Ok, Err, usecase, step, ifElse } = require('../../../src/buchu')
const dependency = {
    ItemRepository: require('../repositories/ItemRepository').ItemRepository,
    ...
}

const addOrUpdateItem = (injection) =>

    usecase('Add or Update an Item on a to-do List', {

        // Input/Request type validation 
        request: { listId: Number, item: Item },

        // Authorization Audit  
        authorize: (user) => user.isAdmin ? Ok() : Err(),

        // Dependency Injection control
        setup: (ctx) => ctx.di = Object.assign({}, dependency, injection),
      
        // Step audit and description
        'Check if the Item is valid': step((ctx) => {
            ...
            return item.validate() // Ok or Error
        }),

        'Check if the List exists': step(async (ctx) => {
            ...
            return Ok()
        }),

        // Conditional step
        'Add or Update the Item': ifElse({

            'If the Item exists': step(async (ctx) => {
                ...
                return Ok(newItem)
            }),

            'Then: Add a new Item to the List': step(async (ctx) => {
                ...
                return ctx.ret = await itemRepo.save(item) // Ok or Error
            }),

            'Else: Update Item on the List': step(async (ctx) => {
                ...
                return ctx.ret = await itemRepo.save(item) // Ok or Error
            })
        })
    })
```
controler/addOrUpdateItem.js:

```javascript
app.put('/items/:item', function (req, res) {
    const request = req.params
    const user = { name: 'John', id: '923b8b9a', isAdmin: true } // from session

    const uc = addOrUpdateItem()
    uc.authorize(user)
    const ret = await uc.run(request)
    res.send(ret)
})
```
`uc.doc()`:

```javascript
{
  type: 'use case',
  description: 'Add or Update an Item on a to-do List',
  request: { listId: Number, item: Item },
  response: String,
  steps: [
    { type: 'step', description: 'Check if the Item is valid', steps: null },
    { type: 'step', description: 'Check if the List exists', steps: null },
    { 
        type: 'if else',
        if: { type: 'step', description: 'If the Item exists', steps: null },
        then: { type: 'step', description: 'Then: Add a new Item to the List', steps: null },
        else: { type: 'step', description: 'Else: Update Item on the List', steps: null }
    }
  ]
}
```
