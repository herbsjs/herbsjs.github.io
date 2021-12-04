---
id: roadmap
title: Herbs Roadmap
sidebar_label: Roadmap
slug: /project/Roadmap
custom_edit_url: null
---

## Vision

In the Herbs community we are always trying to rethink how to improve the current way of developing software. Not only improving the developer experience (which is a very important part for us), but also the other people involved in the process, such as business stakeholders, product managers and QAs, that is, everyone involved in the definition, implementation, validation and use of a system, creating an amazing domain-centric experience. 

Even though Herbs has already developed good conceptual pillars, primitives (entities, use cases, etc.) and glues, and being a library used in dozens of microservices, we believe that our journey in transforming how we make software is just beginning.

## Short term

If you're wondering where to start contributing to the project, here's a list that might help. These are issues that will have a major impact on the project.

Some already have implementations or proof-of-concepts in progress, some don't have any PR yet, and still others are just discussing and trying to figure out the problem. Whatever the stage of each issue, it will be great to have your contribution.

Enjoy!

*(Last update Nov/21)*

- **CLI - Issues and Bugs** - [issue](https://github.com/herbsjs/herbs-cli/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

    *Why?* Developer Experience (DX) - The CLI is the first contact a dev will have with Herbs. They should have a amazing experience and signal the best software quality possible.

- **Convert a Entity to an UC Request** - [issue](https://github.com/herbsjs/buchu/issues/53)

    *Why?* Improve DX, specially for CLI, so devs don't have to change UC request when a entity changes. 

- **Object Discovery** - [issue](https://github.com/herbsjs/herbs/issues/11)

    *Why?* Currently it's hard to find a object like use cases and entities in a project. 

- **ID Field** - [issue](https://github.com/herbsjs/gotu/issues/46)

    *Why?* Improve DX and metadata for glues like Knex, Shelf and others.

- **Shelf - Bugs** - [issue](https://github.com/herbsjs/herbsshelf/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

    *Why?* Shelf is a big part of DX. 

- **Context inside uc.authorize()** - [issue](https://github.com/herbsjs/buchu/issues/44)

    *Why?* Sometimes it will be necessary to access repositories on uc.authorize(). This is a hard issue to solve since it can easily bring some breaking changes.

## Bigger Goals

**First We Need To Bring Harmony**

We grew up quickly, with many wonderful and innovative ideas and contributions. But we need to bring harmony between these various contributions, creating integrations between the new parts that have emerged in the project recently.

This goal is important as new Herbs users should find a more peaceful and integrated experience. To achieve this it is necessary to (1) fix bugs, (2) improve the implementations in the glues so that they absorb and make use of the innovations that happened in Buchu and Gotu and (3) improve the CLI experience. Check the [short term goals](#short-term).

**Changing And Evolving Our Domain Should Be A Pleasure**

Creating a project from scratch is always a pleasure but as the project grows that pleasure starts to fade, as the pain of changing it grows too. What's most shocking is that we create a few projects from scratch but we spend a lot of time evolving them. In other words, the ability to change, evolve and adapt your domain without the fear of doing so is paramount.

For that we need to look into how CLI and glues can improve this constant changing experience, whether in the context of a sprint or in the development cycle within the developer's terminal trying to model the domain.

For example, the CLI not only needs to create an initial code but to understand that domains evolve (use cases, entities, etc.) and that the infrastructure needs to evolve together, such as migrations, repositories, etc.

**Capturing Intentions - Scenarios And Tests**

As a project premise and vision, automated testing is an inseparable part of Herbs. However, we understand that we have not yet explored the full potential of this tool.

For example, when we look at the tests that currently exercise use cases, we see business scenarios that should be exposed and validated by other stakeholders (product managers, business analysts, QA, etc.), just as it is possible to do today with the use cases and their steps.

**A Bigger Garden - Growing The Ecosystem**

Today's primitives, metadata and glues have the potential to create an even larger ecosystem of libraries and solutions that use Herbs. We need to create a strong, welcoming and enabling community so that this ecosystem can flourish.