---
id: gettingStarted
title: Getting Started with Entities
sidebar_label: Getting Started
slug: /herbarium/getting-started
---

### Herbarium

Herbarium is a centralized and standardized repository and discovery service for Herbs objects (entities, use cases, repositories) allowing glues (ex: Herbs Shelf, herbs2rest, herbs2gql, herbs2knex, etc) to access, explore and find these objects.

### Installing

```javascript
$ npm install @herbsjs/herbarium
```

### Initializing

```javascript
const { herbarium } = require('@herbs/herbarium')
herbarium.requireAll(options)
```

This will require all entities, use cases and repositories files.

You can check which files were found within the ```herbarium.requireAll(options)``` method using:

```javascript
const { herbarium } = require('@herbs/herbarium')
const retqAll = herbarium.requireAll(options)

/* Will return an object of array of files founded
 {
   entities:[],
   usecases":[],
   repositories:[]
  }
*/
```
