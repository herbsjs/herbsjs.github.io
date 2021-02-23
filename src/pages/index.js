import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {
  LiveProvider,
  LiveEditor
} from 'react-live'
import theme from 'prism-react-renderer/themes/nightOwlLight';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const features = [
  {
    title: 'Domain that matters',
    imageUrl: '',
    description: (
      <>
        Code your domain first using Herbs and the infrastructure will follow so. 
        stop to spend time with redundant code. 
        At same time we are flexible, for advanced scenarios you can provide your 
        own code and change the behaviour. 
      </>
    ),
  },
  {
    title: 'Keep it clean',
    imageUrl: '',
    description: (
      <>
        Our main concern is maintainability. Create and evolve your code knowing your
        project will not become a big ball of mud even on a multi year project. Concepts
        like Clean Architecture and Clean Code are at its core. 
      </>
    ),
  },
  {
    title: 'Auditable and Secure',
    imageUrl: '',
    description: (
      <>
        Enterprise grade features are standard on Herbs even for simple applications.
        Authorization and auditing are be available out of the box.
        You can still opt-out if needed. 
      </>
    ),
  },
];

const examples = [ 
  {
    description: `Suma helps with single value validations.
    Extensible, test covered and errors code only!
    Suma does not validate schema or objects, just single values. For schema validation take a look at herbjs/gotu.`,
    code: `

const { validate } = require('suma')
const value = null
const validations = { presence: true }
const result = validate(value, validations) 
/* {
    value: null,
    errors: [{ cantBeEmpty: true }]
} */`,
    libImgUrl: 'img/logo-suma.png'
  },
  {
    description: `Gotu Kola helps define your business entities (*)
    (*) Entities: they are the first natural place we should aim to place business logic in domain-driven applications.`,
    code: `

const { entity, field } = require('gotu')    
const item = 
    entity('Item', {
        id: field(Number),
        description: field(String)
    })

const item = new Item()
item.id = 123
item.description = "example"

// gotu use suma inside validate() 
user.validate() 
// TODO, show the result`,
    libImgUrl: 'img/logo-gotu.png'
  },
  {
    description: `Uniform, auditable and secure use case javascript library. Influenced by Clean Architecture and Trailblazer`,
    code: `

const {
  Ok,
  Err,
  usecase,
  step,
  ifElse } = require('buchu')
const dependency = {
    ItemRepository: require('../itemRepository'),
}

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
  })`,
    libImgUrl: 'img/logo-buchu.png'
  }
]


function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Example({title, description, code, libImgUrl}) {
  return (
    <div className="row">
      <div className={clsx('col col--2', styles.feature)}>
        {libImgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={libImgUrl} alt={title} />
          </div>
        )}
      </div>
      
      <div className={clsx('col col--4', styles.centerDescription)}>
        <p>{description}</p>
      </div>
      <div className={clsx('col col--6')}>
        <LiveProvider  theme={theme} code={code}>
          <LiveEditor />
        </LiveProvider>
      </div>
      <spam></spam>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img src="img/logo-herbsjs.png"></img>
          {/* <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>)}


        {examples && examples.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              {examples.map((props, idx) => (
                <Example key={idx} {...props} />
              ))}
            </div>
          </section>)}
      </main>
    </Layout>
  );
}

export default Home;
