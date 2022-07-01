---
id: introduction
title: 1. Introduction
sidebar_label: 1. Introduction
slug: /tutorial/Introduction
---

Herbs helps you build backend applications faster and adds more value for your domain and business logic. You can find out more about it here [What's Herbs?](/docs/introduction/whats-herbs)

If you don't want to see a step-by-step tutorial but an application running with Herbs, you can visit our [Getting Started](/docs) section.

In this tutorial, we are going to walk through all main principles of HerbsJS building a simple API GraphQL to a TODO App, to learn how HerbsJS Works. 

We will create 2 entities one to represent a List and other Item to represente a itens of the List. Before learn how create entities, we will create a simple usescases to create new Lists, delete List, add Item to a List and delete Item to a List. We are using a postgres database to save our Lists and Items. 

To help us in this process, we are using a [`herbs-cli`](https://github.com/herbsjs/herbs-cli) which starts up a new project scaffolding.


## What to Expect

- You will learn Herbs architectural concepts
- Create a API to TO-DO App
- 2 entities
- 4 use cases
- Database access and Repositories
- GraphQL Types, Mutations and Queries
- Documentation with Herbs Shelf

## Requirements

- You need to have [Node.js](https://nodejs.org/en/) installed into your machine with LTS version
- herbs-cli installed globally
- PostgreSQL installed or Running in a Docker Container
- A API Client to make requests and see responses, like Postman or Insomnia. Choose your favorite.