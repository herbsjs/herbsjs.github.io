---
id: specs
title: 5. Specs
sidebar_label: 5. Specs
slug: /tutorial/specs
---

## Introduction to the Specs concept

While in use cases we have the actions that the user can use from the domain. Specs are the definition of scenarios that test the expected behavior of a use case.

Previously with the execution of `herbs update` command, the initial code of our use cases was generated and for each of them a spec file was also generated.

We can find them side by side with our use cases:
```sh
src
└── domain
    └── usecases
        └── list
            ├── createList.js
            └── createList.spec.js
```

> Refer to [Specs - Getting Started](/docs/specs/getting-started) to know more.

Now, let's use createList.spec.js to learn how to create scenarios that test and validate the intent of the use case createList.js , which as its name suggests, create a list.

## createList.spec 

So, what is happening here? follow comments in the code to understand.

```javascript

/*
    Assert is a nodejs thats provides a set of assertions functions,
    see more in section: docs > specs > features > assertion
*/
const assert = require('assert')

/* Importing the main functions to create spec */
const { spec, scenario, given, check, samples } = require('@herbsjs/herbs').specs

/* 
    Here we can see herbarium again! 
    just remember thats herbarium stores all metadata for our application
*/
const { herbarium } = require('@herbsjs/herbarium')

/* Importing the use case thats we will explore scenarios */
const createList = require('./createList')


/*
    We start a const createListSpec, thats assigned
    with spec() function.

    spec(), expects an object that we will reference
    a use case and we will describe its test scenarios.
*/
const createListSpec = spec({

    /* Setting createList entity as an use case of spec */
    usecase: createList,


    /* 
        Here we a creating a string property, thats
        cleary describes a scenario thats we wanna test,
        'Create a new list when it is valid'.

        And throught scenario() function we are setting
        the scenario conditions and its assertions.
    */
    'Create a new list when it is valid': scenario({

        /*
            given() set to a use case of this spec,
            a context mockup to test this scenario,
            here is being passed request params to use case,
            a user object for use case authorization and a injection
            property thats contains all dependecies injections that
            use case needs. 

            given() provides data for the test context of the 
            'Create a new list when it is valid' scenary
        */
        'Given a valid list': given({
            request: {
                name: 'a text',
                description: 'a text'
            },
            user: { hasAccess: true },
            injection: {
                ListRepository: class ListRepository {
                    async insert(list) { return (list) }
                }
            },
        }),

        // when: default when for use case

        'Must run without errors': check((ctx) => {
            assert.ok(ctx.response.isOk)  
        }),

        'Must return a valid list': check((ctx) => {
            assert.strictEqual(ctx.response.ok.isValid(), true)
            // TODO: check if it is really a list
        })
    }),


    'Do not create a new list when it is invalid': scenario({
        'Given a invalid list': given({
            request: {
            name: true,
            description: true
            },
            user: { hasAccess: true },
            injection: {
                listRepository: new ( class ListRepository {
                async insert(list) { return (list) }
                })
            },
        }),

        // when: default when for use case

        'Must return an error': check((ctx) => {
            assert.ok(ctx.response.isErr)  
            // assert.ok(ret.isInvalidEntityError)
        }),
    }),
})

module.exports =
herbarium.specs
    .add(createListSpec, 'CreateListSpec')
    .metadata({ usecase: 'CreateList' })
    .spec
```