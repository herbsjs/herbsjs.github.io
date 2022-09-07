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

*(Last update Sep/22)*

- **New Web Site**

    The site has several functions, and informing is the most obvious. However, it is also the best opportunity to create a good first impression on new users. We hope the new website conveys the attributes that are also found in the library: high quality, great usability, concern for details and finishes.

    *Where to start?* [issue](https://github.com/herbsjs/herbsjs.github.io/issues/138)

- **Better Support For Entity Relationships**

    Currently most glues have some kind of support for relationships between entities (entities that are linked in some way to each other - 1:1, 1:N, N:N). However, this support can be improved, especially in repository glues and the CLI. This support must happen in the translation of the object-oriented paradigm to relational or documents. It should also support migrations.

    *Where to start?* [issue](https://github.com/herbsjs/herbs-cli/issues/145), [issue](https://github.com/herbsjs/herbs2knex/issues/57)

- **Sample Applications**

    The To Do List sample application is a great way to learn how to use Herbs and is used by many people as an application reference. However, this example is currently out of date and does not reflect the current state of the project. The idea is to create a new sample application that uses the latest version of Herbs and is built with the CLI.

    Another work front would be to have an open source application that is at the same time an example of using Herbs but also has real applicability, regardless of the details of its construction.

- **CLI Improvements**

    The CLI is great for everyday use and has become one of the most important and central tools in the Herbs ecosystem. However the CLI was created as a proof of concept and has been extended ever since without the same architectural rigors found in other modules. The next steps for the CLI should be a refactoring or rewrite that takes into account automated tests per module, better UX and documentation on this site.

- **Authorization / Authentication**

    Currently, Herbs supports authorization via Use Cases (`authorize`) and allows custom authentication via files generated in the CLI. However, the developer experience is not good. For example, there are no options in the CLI to choose glues and libs from the javascript ecosystem for authorization or authentication. Another example, it is unclear how to customize the CLI generated files to implement microservice authentication.

- **Library Documentation Improvements**

    Documentation is currently concentrated on this site, but many repositories have their own README files, which can confuse users looking for information. Since some of these files are not in sync with this site, the idea is to centralize all the docs here.

    *Where to start?* [issue](https://github.com/herbsjs/herbsjs.github.io/issues/145)

## Bigger Goals

**Harmony and Stability**

We grew up quickly, with many wonderful and innovative ideas and contributions. But we need to bring harmony between these various contributions, creating integrations between the new parts that have emerged in the project recently.

This goal is important as new Herbs users should find a more peaceful and integrated experience. To achieve this it is necessary to (1) fix bugs, (2) improve the implementations in the glues so that they absorb and make use of the innovations that happened in Buchu, Gotu and Aloe and (3) improve the CLI experience. Check the [short term goals](#short-term).

**Changing And Evolving Our Domain Should Be A Pleasure**

Creating a project from scratch is always a pleasure but as the project grows that pleasure starts to fade, as the pain of changing it grows too. What's most shocking is that we create a few projects from scratch but we spend a lot of time evolving them. In other words, the ability to change, evolve and adapt your domain without the fear of doing so is paramount.

For that we need to look into how CLI and glues can improve this constant changing experience, whether in the context of a sprint or in the development cycle within the developer's terminal trying to model the domain.

For example, the CLI not only needs to create an initial code but to understand that domains evolve (use cases, entities, specs, etc.) and that the infrastructure needs to evolve together, such as migrations, repositories, etc.

**A Bigger Garden - Growing The Ecosystem**

Today's primitives, metadata and glues have the potential to create an even larger ecosystem of libraries and solutions that use Herbs. We need to create a strong, welcoming and enabling community so that this ecosystem can flourish.