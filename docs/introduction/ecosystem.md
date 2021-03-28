---
id: ecosystem
title: The HerbsJS Ecosystem
slug: /introduction/ecosystem
---


Today herbs has 3 primary libraries and some glues, which you can learn more about in our official github repository on [herbjs github](https://github.com/herbsjs)

However, I find it worthwhile to highlight the 3 main libraries of herbsJS here: **suma**, **gotu** and **buchu**.

**[Suma](/docs/libs/suma)** - Suma helps with single value validations. Extensible and error code only! In short, it does not validate schemes or objects, only unique values.

**[Gotu](/docs/entity)** - Gotu helps to define your business entities. Entities: they are the first natural place where we should aim to put the business logic in domain-oriented applications.

**[Buchu](/docs/usecase)** - Uniform, auditable and secure javascript library of use cases. Influenced by Clean Architecture and Trailblazer

## Keep it simple

If you're just going to consume the library, the idea is not to complicate it.

We have already talked here about the complexity of business rules and how we try to solve this with herbsJS, but if you look closely, you can see that at the center of the concept of clean architecture, you will notice that use cases are the center of everything, it is there that the business rule remains, together with the entities that guide and model the behavior of that system. HerbsJS was born from there, to try to describe complex business rules in an easy way for humans and machines to read.

You don't need to decorate or know in depth what each primary library does, but each one takes care of a part of the core of your code.

In the next sections of our documentation you will learn a little more about them and how to get the best out of HerbsJS for your application.