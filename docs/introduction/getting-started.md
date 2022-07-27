---
id: getting-started
title: Getting Started with Herbs
sidebar_label: Getting Started
slug: /
custom_edit_url: null
---

 <p align="center"><img src="../../img/logo-herbsjs.svg" height="220" alt="herbsjs logo" style={{maxWidth: '50%'}}></img></p>  

Herbs is an open source library for backend applications, allowing you to build your microservices in Node.js faster and future-proof. It is focused on achieving faster deliveries and with happier developers, without neglecting the long-term need to constantly evolve your application as requirements change. 

Herbs uses a "**Domain-First**" approach in order to achieve this: you and your team focus on your business domain and let Herbs handles the infrastructure code. Herbs will extract metadata from your domain and dynamically generate, on the fly (no code generation), your transport and repositories layers using the best existing libraries in the ecosystem. 

The world is complex and we know that we won't be able to solve all problems with just one approach, so being humble is part of Herbs' principles. While we believe Herbs will help you in most cases, we are aware that there will be advanced scenarios that the defaults won't be enough for your application to make a difference. This means having flexible conventions, an extensible library and not replacing or hiding any abstraction important to your application.

## Installation

```bash
$ npm i -g @herbsjs/herbs-cli 
$ herbs new
```

## Take a tour of our tutorial

This [tutorial](/docs/tutorial/new-project) will take you step by step through how to create a Herbs application from scratch. From installing packages to having a microservice ready to deploy in a few minutes.

## Take a tour of our sample application

We created an example repository, that you can see the applicability of Herbs in a project closer to the real world. This application consists in a microservice for a [To Do List using Herbs](https://github.com/herbsjs/todolist-on-herbs). It is possible to explore concepts like [Entities](/docs/entity/getting-started), [Use Cases](/docs/usecase/getting-started) and [Specs](/docs/specs/getting-started). 

## Issues & Discussions

We have a Discord server with our discussions and questions about the world around Herbs. If you have any questions, you can communicate with the community through this link: [Herbs Discord](https://discord.gg/e3cQ66KDv5)

## Next steps

Now that you've seen the basics of using Herbs, in the next sections of the documentation, we'll explain in detail how Herbs works under the hood for you.