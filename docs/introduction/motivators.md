---
id: motivators
title: Motivators
sidebar_label: Motivators
slug: /introduction/motivators
---

Complex business rules increase the cost of maintaining software

## Why we built HerbsJS

A challenge in software development has always been to meet the needs of end users, with greater precision and speed at the operational and strategic levels of the organization. Still, the complexity has grown rapidly due to the strong demands for systems that require integrations with other systems, and so these integrations happen in countless ways, whether between new systems, between legacy systems or integrations between API's. The sum of it all is: Complex business rules increase the cost of maintaining the software. and one of the main motivators of HerbsJS is to bring clarity of business rules into the software, without necessarily creating comments or extensive documentation on all of that functionality.

Another great motivator was to realize the huge amount of software that we wrote around the core of the application so that it works in an appropriate way to a corporate system, such as authentication, authorization, auditing, documentation, etc. We ended up writing a lot of code that is not really related to the business. HerbsJS tries to minimize this amount of "infrastructure" code that we write, bringing you some of these features, but without making the library a alphabet soup.

## The solution

HerbsJS can be defined as follows: Group of Javascript libraries focused on the business layer (Domain Layer), with “glues” for the infrastructure layers. Here at Vórtx you will often hear the word "glue", which is nothing more than a secondary lib acting as an adapter for another lib, whether it is a third-party lib or not.

![herbsJS](/img/herbsjs_clean_architecture.png)


## Clean Architecture inspiration

Clean Architecture was created by Robert C. Martin and promoted in his book Clean Architecture: A Craftsman’s Guide to Software Structure. Like other software design philosophies, Clean Architecture tries to provide a methodology to be used in coding, in order to facilitate code development, allow for better maintenance, updating and less dependencies.

An important goal of Clean Architecture is to provide developers with a way to organize code in a way that encapsulates business logic, but keeps it separate from the delivery mechanism.

Clean Architecture was not the first software design concept that appeared, over time software architectures have been created with the same objective of solving a design principle known as SoC (separation of concerns).

You will hear a lot about Clean Architecture here, so I recommend reading the book and / or that you seek to delve into this subject: [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)