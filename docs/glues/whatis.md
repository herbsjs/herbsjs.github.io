---
id: whatisglue
title: Glues
sidebar_label: What's glues
slug: /glues
---

![Glues](/img/glues.png)

## Why Glues?

Have you ever had the feeling of writing unnecessary code? Everyone must have gone through this already: a new field needs to be created, so you need to add it to your GraphQL schema, to your business entity, also to your repository and change your documentation. 

As we can see it is not just an error-prone process, but also drives the focus to create low value code for the final delivery.

What we seek with Herbs is that you and your team should focus where there is the greatest return for your effort: entities, use cases and business rules, that is, your domain.

Glues are an important part of the Herbs architecture as they will solve the fundamental problem of replicating domain information to the application's infrastructure.

## What is a Glue?

A Glue is a library that consume metadata from your entities and use cases and dynamically generate features, code or documentations based on this metadata.

In practical terms, a glue can dynamically generate endpoints from a REST application based on entities and use cases, for example. Or, based on an entity, generate a specialized repository to read and write to a relational database. That is, a glue can do anything using the domain's metadata. That is, there is a lot that a Glue can do using basically the metadata of the domain of an application.

Here you can find some Glues created by the Herbs core developers that have been tested in production environments and are ready to be used. 
