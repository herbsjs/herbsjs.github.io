import React from 'react';
import styles from './styles.module.css';
import theme from 'prism-react-renderer/themes/nightOwlLight';
import {
  LiveProvider,
  LiveEditor
} from 'react-live'

const exampleEntity =  `const { entity, field } = require('gotu')

const Feature = 
        entity('Feature', {
            name: field(String),
            hasAccess: field(Boolean)
        })

const Plan = 
    entity('Plan', {
        name: field(String),
        monthlyCost: field(Number)
    })

const User = 
    entity('User', {
        name: field(String),
        lastAccess: field(Date),
        accessCount: field(Number),
        features: field([Feature]),
        plan: field(Plan),
    })

const user = new User()
user.name = "Beth"
user.plan.monthlyCost = 10
user.features = [ 
    new Feature(),
    new Feature(),
    new Feature()
]
user.validate() `

const exampleUseCase = `const { Ok, Err, usecase, step, ifElse } = require('buchu')
const dependency = { ItemRepository: require('../itemRepository') }

const addOrUpdateItem = (injection) =>
  usecase('Add or Update an Item on a to-do List', {
    // Input/Request type validation 
    request: { listId: Number, item: Item },
    // Authorization Audit  
    authorize: (user) => user.isAdmin ? Ok() : Err(),
    // Dependency Injection control
    setup: (ctx) => {
      ctx.di = Object.assign({}, dependency, injection)
    },
    // Step audit and description
    'Check if the Item is valid': step((ctx) => {
        //...
        return item.validate() // Ok or Error
    }),
    'Check if the List exists': step(async (ctx) => {
        //...
        return Ok()
    }),

    // Conditional step
    'Add or Update the Item': ifElse({
      'If the Item exists': step(async (ctx) => {
          //...
          return Ok(newItem)
      }),
      'Then: Add a new Item to the List': step(async (ctx) => {
          //...
          // Ok or Error
          return ctx.ret = await itemRepo.save(item)
      }),
      'Else: Update Item on the List': step(async (ctx) => {
          //...
          // Ok or Error
          return ctx.ret = await itemRepo.save(item)
      })
    })
  })`

  export default function Examples() {
    return (
    <div className={styles.examples}>
     <h2 className={styles.examplesTitle}>Domain</h2>
     <div className={styles.exampleContent}>
      <h3>ENTITIES</h3>
      <div className={styles.exampleCode}>
        <LiveProvider theme={theme} code={exampleEntity} >
          <LiveEditor className={styles.examplesEditor} />
        </LiveProvider>    
      </div>
    </div>
    <div className={styles.exampleContent}>
      <h3>USE CASES</h3>
      <div className={styles.exampleCode}>
        <LiveProvider  theme={theme} code={exampleUseCase}>
          <LiveEditor className={styles.examplesEditor}/>
        </LiveProvider>    
      </div>
    </div>
    <div className={styles.exampleArrow}>
      <img src="img/arrow.png" alt="down-arrow"/>
    </div>
    </div>
  );
}