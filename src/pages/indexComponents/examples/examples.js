import React from 'react'
import styles from './styles.module.css'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import { LiveProvider, LiveEditor } from 'react-live'

const exampleEntity = `entity('Item', {
  id: field(Number),
  
  isDone: field(Boolean, {
    default: false
  }),
  
  position: field(Number, { 
    validation: { presence: true } 
  }),

  description: field(String, { 
    default: "", 
    validation: { presence: true, length: { minimum: 3 } }
  })

})

entity('To Do List', {
  id: field(Number),

  name: field(String, {
      validation: { presence: true, length: { minimum: 3 } }
  }),

  items: field([Item])
})
`

const exampleUseCase = `usecase('Create List', {
    // Input/Request fields and types
    request: { name: String },

    // Output/Response type
    response: TodoList,

    // Use case constructor
    setup: ctx => (ctx.di = Object.assign({}, dependency, injection)),

    // Authorization check and audit
    authorize: user => (user.canCreateList ? Ok() : Err()),

    // Steps description and audit
    'Check if the List is valid': step(ctx => {
      const list = ctx.list = new TodoList()
      list.id = Math.floor(Math.random() * 100000)
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
				<img src='img/arrow.png' alt='down-arrow' />
			</div>
		</div>
	)
}
