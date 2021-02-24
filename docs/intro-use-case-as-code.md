---
id: introDoc2
title: Use Case as Code
sidebar_label: Use Case as Code
slug: /introduction/use-cases
---

We’ve already talked about the complexity of business rules and how we try to solve this with herbsJS, but if you look closely you can see that at the center of the clean architecture concept, you’ll notice that * use cases * are at the center of everything, that's where the business rule is, along with the entities that guide and model the behavior of that system. HerbsJS was born from there, to try to describe complex business rules in an easy way for humans and machines to read.

Here we can see an example of a use case implemented with ** buchu **, one of the herbsJS libs:

``` js
usecase("Add or Update an Item on a to-do List", {
        request: { listId: Number, item: Object },

        authorize: (user) => user.isAdmin ? Ok() : Err(),

        setup: (ctx) => ctx.di = Object.assign({}, dependency, injection),

        "Check if the Item is valid": step((ctx) => {
            const item = ctx.ret.item = new ctx.di.Item(ctx.req.item)
            return item.validate() // Ok or Error
        }),

        "Check if the List exists": step(async (ctx) => {
            const listRepo = new ctx.di.ListRepository(ctx.di)
            const list = await listRepo.first(ctx.req.listId)
            const hasList = (list != null)
            if (!hasList) { return Err("List does not exist. listId: " + ctx.req.listId) }
            return Ok()
        }),

        "Add or Update the Item": ifElse({

            "If the Item exists": step(async (ctx) => {
                const itemRepo = new ctx.di.ItemRepository(ctx.di)
                const item = await itemRepo.firstLike(ctx.req.item.name)
                const newItem = (item == null)
                if (!newItem) ctx.ret.item = item
                return Ok(newItem)
            }),

            "Then: Add a new Item to the List": step(async (ctx) => {
                const item = ctx.ret.item = new ctx.di.Item(ctx.req.item)
                const itemRepo = new ctx.di.ItemRepository(ctx.di)
                return await itemRepo.save(item) // Ok or Error
            }),

            "Else: Update Item on the List": step(async (ctx) => {
                const item = ctx.ret.item
                item.name = ctx.req.item.name
                item.position = ctx.req.item.position
                const itemRepo = new ctx.di.ItemRepository(ctx.di)
                return await itemRepo.save(item) // Ok or Error
            })
        })
    })
```

With just one method, you can generate documentation for that usecase:
``` js
console.log(uc.doc())
/*
 {
  type: 'use case',
  description: 'Add or Update an Item on a to-do List',
  steps: [
    {
      type: 'step',
      description: 'Check if the Item is valid',
      steps: null
    },
    {
      type: 'step',
      description: 'Check if the List exists',
      steps: null
    },
    {
      description: 'Add or Update the Item',
      type: 'if else',
      if: [Object],
      then: [Object],
      else: [Object]
    }
  ],
  request: { listId: [Function: Number], item: [Function: Object] }
}*/
```

And with another, you can audit it:

``` js
uc.audit()
/* {
  type: 'use case',
  description: 'Add or Update an Item on a to-do List',
  transactionId: 'c7702d26-aad2-4641-9bc3-409fc5a310f7',
  user: { user: 'John', id: '923b8b9a', isAdmin: true },
  authorized: true,
  return: Ok { value: { item: [Item] } },
  steps: [
    {
      type: 'step',
      description: 'Check if the Item is valid',
      return: [Ok],
      elapsedTime: 64400n
    },
    {
      type: 'step',
      description: 'Check if the List exists',
      return: [Ok],
      elapsedTime: 53700n
    },
    {
      type: 'if else',
      description: 'Add or Update the Item',
      returnIf: [Ok],
      returnThen: [Ok],
      elapsedTime: 119300n
    }
  ],
  elapsedTime: 802300n
}*/
```
