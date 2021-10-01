---
id: getting-started
title: Getting Started with Herbs
sidebar_label: Getting Started
slug: /
custom_edit_url: null
---

## Installation

Herbs is available as an [npm package](https://www.npmjs.com/package/@herbsjs/herbs).

To install and save in your package.json dependencies, run:

```bash
# with npm
npm install @herbsjs/herbs

# with yarn
yarn add @herbsjs/herbs
```

## Using

Here's a quick example to get you started, it's literally all you need:

```js
import { entity, field, Ok, Err, usecase, step, ifElse  } from '@herbsjs/herbs'

const Item = entity('Item', {
  id: field(Number),
  description: field(String),
  isDone: field(Boolean),
  position: field(Number)
})

const dependency = {
    ItemRepository: require('../repositories/ItemRepository').ItemRepository,
    ...
}

const addOrUpdateItem = (injection) =>

usecase('Add or Update an Item on a to-do List', {

    // Input/Request type validation
    request: { listId: Number, item: Item },

    // Output/Response type
    response: { item: Item },

    // Authorization Audit
    authorize: async (user) => user.isAdmin ? Ok() : Err(),

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

## Take a tour of our sample application

We created an example repository, that you can see the applicability of Herbs in a project closer to the real world. This application consists in a GraphQL API using Herbs and a [template](https://github.com/herbsjs/todolist-on-herbs/generate) to use with this repository

So, you can start with HerbJS, taking a look at the [sample repository](https://github.com/herbsjs/todolist-on-herbs), or follow this documentation to get more knowledge of how to use herbsJS

## Issues & Discussions

We have a discord with our discussions and questions about the world around Herbs. Any question, you can communicate with the community through this link: [Herbs Discord](https://discord.gg/e3cQ66KDv5)

## Next steps

Now that you've seen the basics of using Herbs, in the next sections of the documentation, we'll explain in detail how Herbs works under the hood for you.