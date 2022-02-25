import React from 'react'
import styles from './styles.module.css'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import { LiveProvider, LiveEditor } from 'react-live'

const exampleEntity = `const Item = 
  entity('Item', {
    id: id(Number),
    isDone: field(Boolean, {
      default: false
    }),
    description: field(String, { 
      validation: { presence: true, length: { minimum: 3 } }
    })
  })

const TodoList = 
  entity('To Do List', {
    id: id(Number),
    name: field(String),
    items: field([Item])
    isDone() {
      return this.items.length === this.items.filter(i => i.isDone).length
    }
    
  })
`

const exampleUseCase = `const CreateList = 
  usecase('Create List', {
    // Input fields and types
    request: { name: String }, 

    // Output type
    response: TodoList, 

    // Authorization check and audit
    authorize: async (user) => (user.canCreateList ? Ok() : Err()),

    // Steps description and audit
    'Check if the List is valid': step(ctx => {
      const list = ctx.list = new TodoList()
      list.id = Math.random()
      list.name = ctx.req.name
      if (!list.isValid()) return Err(list.errors)
      return Ok()
    }),

    'Save the List': step(async ctx => {
      const listRepo = new ctx.di.ListRepository(injection)
      return (ctx.ret = await listRepo.insert(ctx.list))
    }),
  })
`

export default function Examples() {
  return (
    <div className={styles.examples}>
      <h2 className={styles.examplesTitle}>Domain</h2>
      <div className={styles.exampleContent}>
        <h3>ENTITIES</h3>
        <div className={styles.exampleCode}>
          <LiveProvider theme={theme} code={exampleEntity}>
            <LiveEditor className={styles.examplesEditor} />
          </LiveProvider>
        </div>
      </div>
      <div className={styles.exampleContent}>
        <h3>USE CASES</h3>
        <div className={styles.exampleCode}>
          <LiveProvider theme={theme} code={exampleUseCase}>
            <LiveEditor className={styles.examplesEditor} />
          </LiveProvider>
        </div>
      </div>
      <div className={styles.exampleArrow}>
        <img src='img/arrow.svg' alt='down-arrow' />
      </div>
    </div>
  )
}
