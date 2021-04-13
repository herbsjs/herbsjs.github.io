---
id: motivation
title: Motivation
sidebar_label: Motivation
slug: /introduction/motivation
---

The goal of software development has always been to have happy customers through amazing features, working accurately and delivered as quickly as possible. We know that impose clear challenges for developers. 

These are the major pain points in software development that Herbs tries to help solve:

## Domain-first

A great motivation for Herbs came to realize the huge amount of software that we write around the domain core of an application to make it work properly. It is commonplace to see layers of an application that basically share the same properties and knowledge of the core like entities, fields types, etc but changes to your domain do not reflect the rest of your code.

A very simple and direct manifestation of this is when it is necessary to add a new field to an entity on your domain. That means also changing the entity repository, the GraphQL type or a REST endpoint, changing the documentation, etc. This is because current libraries are not prepared to create a [single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth#SOLID_&_Source_Code) for their domain.

Because of that, a lot of effort is put into writing low-value codes, which are not really related to the business domain.

We believe that we can do much better. Developers should put a lot of their efforts into writing high-impact code, focused on their business domain. For the rest, it should be generated automatically for you.

## Code Intention

Building software that evolves is difficult, especially for those who are tasked with changing the current version to accommodate the new requirements.

One of the main reasons why it is difficult is because the code is a manifestation of an initial intention, but that intention is rarely captured in the code. This makes reading code basically a decoding task.

As your business rules become more complex, the task of reading and understanding the code becomes exponentially more difficult, thus hampering the evolution of the application.

So, if you are building a project that is a team effort and should be up and running in the long run, being able to keep your code understandable to the next developer is essential.

With Herbs we try to bring those initial intentions closer to the code. Thus, the next developer who reading the code will have a much better experience when changing and evolving your application.

## "Enterprise Features" Out Of The Box

In business domains it is common the need for authorization and auditing. However, these features are treated as "enterprise" features, which usually requires an investment from the developer to incorporate these features into the application.

This investment should not be necessary if your domain is aware of the actions taken by users.

Herbs brings these features out of the box because we simply believe they should be there, even for simple applications. That means having robust applications from the beginning with very low investment.

## Inspirations

![herbsJS](/img/herbsjs_clean_architecture.png)

Well design libraries borrow from the past. Herbs uses the understanding gained by major thinkers in software engineering in order to innovate.

Clean Architecture was created by Robert C. Martin and promoted in his book [Clean Architecture: A Craftsman’s Guide to Software Structure](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html). Like other software design philosophies, Clean Architecture tries to provide a methodology to be used in coding, in order to facilitate code development, allow for better maintenance, updating and less dependencies. An important goal of Clean Architecture is to provide developers with a way to organize code in a way that encapsulates business logic, but keeps it separate from the delivery mechanism.

Similar to Clean Architecture, the concept of Domain-driven design (DDD) was initially introduced and made popular by programmer Eric Evans in his 2004 book, [Domain-Driven Design: Tackling Complexity in the Heart of Software](https://books.google.com/books?id=hHBf4YxMnWMC&redir_esc=y), domain-driven design is the expansion upon and application of the domain concept, as it applies to the development of software. It aims to ease the creation of complex applications by connecting the related pieces of the software into an ever-evolving model. 

Even though it is not necessary to read these books to use Herbs, reading and understanding the concepts presented there will help you to understand the principles used here and, in addition, they are highly recommended for the development of a software developer.

Of course, libraries from different ecosystems have been a great source of inspiration. Successes and mistakes of these efforts were taken into account: [Rails](https://rubyonrails.org/), [Django](https://www.djangoproject.com), [Trailblazer](https://trailblazer.to/), [Hanami](https://hanamirb.org/), [Cucumber](https://cucumber.io/) and many others. 

## History

Herbs was created in 2019 at [Vórtx](https://vortx.com.br/), a fintech with exponential growth, a small team and a huge list of demands.

Their architecture is based on microservices and required the creation of several services in a short period of time. As a financial institution, it was necessary for these services to be delivered with a high level of quality, observability and maintainability. It was in this scenario that Herbs was born.

Since then, Herbs has been used in production in more than 10 microservices there, became a open source project and is maintained by several people outside and inside Vórtx.