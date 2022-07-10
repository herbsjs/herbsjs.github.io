---
id: new-project
title: 2. Creating a New Herbs Project
sidebar_label: 2. New Project
slug: /tutorial/new-project
---

We will use herbs-cli to start our project. Visit [`herbs-cli`](https://github.com/herbsjs/herbs-cli) repository to find out more.

## Project Setup

1. Install [`herbs-cli`](https://github.com/herbsjs/herbs-cli) globally:

```sh
npm i -g @herbsjs/herbs-cli 
```

2. Create a new project using it:

```sh
herbs new
```

3. Answer the questions to create the project:

```javascript
// Type a name for your project.
? Project name? 

// Type a description to make it  \n easier to understand what the project is about.
? Project description? 

//  Set name o author's
? Project author's name?

// choose the license type that best suits your project
// you can choose between MIT, BSD and GNU
? What license do you want to use? 

// Confirm with (Y/n) to create a layer to graphql api
? Add graphql layer? 

// Confirm with (Y/n) to create a layer to rest api
? Add rest layer? 

// Choose a database between Postgres, Mongo, SQLServer, MySQL
? What database do you want to use? 

// Confirm with (y/N) to init a git repository
? Do you want to initialize a Git respository? 
```

After these questions, herbs-cli asks you want it run automatically 
some steps to install dependencies and run ```herbs update```. Let herbs makes the work and when you are asked, answer ```Yeah, please```. In next steps we will use ```herbs update``` command to maintain our application updated with entities. 

```javascript
? Run it now?
    Yeah, please
```

See steps that will reproduced:

![](../../static/assets/herbs-new2.gif)


#### Initial Project

At this point it is already possible to run the application that herbs-cli initially prepared. But for now, let's analyze the folders and files created to better understand the structure of a project with ```herbs``` and to know where we will act in the next steps.

Starting in ```/src```, we can see ```domain``` and ```infra``` folders.
```sh
└─ src
   ├── domain
   └── infra        
```

**domain:** Here we will find the heart of the business - literally everything that defines the business rules and gives it an identity, a purpose, will be here.

Inside domain are ```entities``` and ```usescases```
```sh
└─ domain
   ├── entities
   └── usecases       
```

**entities:** Here will be the definition of the business objects. In the next steps we will use this place to create the entities List and Item, which are the objects we want our application to manage. ```herbs-cli``` was started a example entity User, as you can see inside folder.

**usecases:** In use cases, we find the business rules of each entity with its particularities and the specifications that validate these rules in given scenarios. We will see more deeply in step 3 how to work with the entities and in step 5 with the specifications.

> When ```herbs update``` comands run in first time, a moment ago, has been created a many files like createUser.js and createUser.spec.js, these files a initial use cases for a entity User, after when we created new entities and run ```herbs update``` again, it will be generated for each entity a new file thats contains a initial steps for create, delete, find an update operations.


Now, let's take a look inside the infra folder!

**infra:** Inside infrastructure reside definitios for the application layer, data access layer and some configuration objects. These are the tools that support the operation of our business. 

```sh
└── infra
    ├── api
    ├── config
    └── data
``` 

**api:** Contains the Rest and GraphQL API layers.

**config**: Contains enviroment variables and dabatases conections authentications.

**data**: Contains the repositories thats abstract databases operations throught a ORM and migrations files thats specifies database table schemas.