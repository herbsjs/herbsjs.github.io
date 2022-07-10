---
id: introduction
title: 1. Introduction
sidebar_label: 1. Introduction
slug: /tutorial/Introduction
---

Herbs helps you build backend applications faster and adds more value for your domain and business logic. You can find out more about it here [Why Herbs?](/docs/introduction/why-herbs)

If you don't want to see a step-by-step tutorial but an application running with Herbs, you can visit our [Getting Started](/docs) section.

In this tutorial, we are going to walk through all main principles of HerbsJS building a simple API GraphQL to a TODO App, to learn how HerbsJS Works. 

We will create 2 entities one to represent a List of tasks and other to represent items of this List. After learn how create entities, we will create some use cases to create, read, update and delete Lists and Items from database.

To help us in this process, we are using a [`herbs-cli`](https://github.com/herbsjs/herbs-cli) which starts up a new project scaffolding.


## What to Expect

- You will learn Herbs architectural concepts;
- Create a API to TO-DO App;
- Create 2 entities with their uses cases and specs;
- Database access and Repositories;
- Consuming API using GraphQL or Rest;
- Build a relation between entities.

## Requirements

- Previous Javascript knowlegds;
- Be familiar Domain Driven Design (DDD) and Clean Architecture;
- [Node.js](https://nodejs.org/en/) installed in LTS version, prefered >= v.14;
- herbs-cli installed globally;
- Any of these databases installed: PostgreSQL, MySql, SqlServe, Mongo;
- A API Client to make requests and see responses, like Postman or Insomnia. Choose your favorite.