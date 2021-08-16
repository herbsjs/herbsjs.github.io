---
id: ecosystem
title: Ecosystem
slug: /introduction/ecosystem
custom_edit_url: null
---

There are three primitive herbs libraries that are at Herbs' core, helping modeling your domain and preparing it to expose metadata. To consume these metadata and bring value to your domain there are [glue](/docs/glues) libraries. They create bridges between Herbs core and other libraries already consolidated in the node.js community.

## Herbs Core

[**Gotu**](https://github.com/herbsjs/gotu): Model your business [entities](/docs/entity/getting-started) with validation and business rules.

[**Buchu**](https://github.com/herbsjs/buchu): Model your [use cases](/docs/usecase/getting-started) to be readable, auditable and secure.

[**Suma**](https://github.com/herbsjs/suma): It is the base library for value validation used internally by Gotu and Buchu.

## Herbs Core distribuition

[**Herbs**](https://github.com/herbsjs/herbs): We put the core libraries into a single distribution by reference, as we believe that all the main features can be made available through a simple command: 

```
 npm install @herbsjs/herbs 
```

## Glues

Glues are libraries that consume your domain's metadata and dynamically generate for you a significant part of the infrastructure API on the fly (no code generation), such as REST endpoints and controllers, resolvers and types for GraphQL, specialized repositories, as well as documentation and other features that we haven't even imagined yet.

There are some Glues maintained directly by the Herbs core developers, but we believe that the ecosystem is still in its infancy, so we encourage the creation of other Glues and thus help more developers to unlock their domains.

To better understand what a Glue is and which ones are ready to use, visit the [Glues](/docs/glues) page.
