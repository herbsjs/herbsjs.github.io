---
id: gettingStarted
title: Getting Started with Specs
sidebar_label: Getting Started
slug: /specs/getting-started
---

## What's a Spec?

A use case describes WHAT an application does, but it does not capture the intentions (expected behavior) that led to the creation of that use case, in other words, WHY this use case exists.

For instance, a scenario for an application that involves payment would be "When paying the full amount, the discount applies" and the use case to support it would be "Pay for a Product". 

So, Specs capture the usage intent of an application through its scenarios. 

In doing that it also ensures that the scenario will exercise the application with known inputs and validate the expected outputs.

### Installing

```bash
$ npm install @herbsjs/herbs
```

### Using

```javascript
const { spec, scenario, given, check, samples } = require('@herbsjs/herbs').specs

const taskCountSpec = spec({
    'Change count for the task': scenario({
        'Given a valid task': given({ task: 'do it', count: 0 }),
        'When increase count': when((ctx) => (ctx.count++)),
        'Must have a increased count': check((ctx) => { assert.ok(ctx.count === 1) }),
    }),
})
```
