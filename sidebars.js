const sidebar = {
  Introduction: ['getting-started', 'herbsjs'],
  Tutorial: [
    'introduction',
    'new-project', 
    'create-entity', 
    'working-usecases', 
    'specs',
    'repositories',
    'migrations',
    'graphql-rest'
  ],
  Project: [
    'motivation', 'roadmap', 'architecture', 'ecosystem', 'contributing', 'acknowledgements', 'logos', 'CoC', 'license'],
  UseCase: ['gettingStarted', 'features', 'steps', 'result'],
  Entity: ['gettingStarted', 'features', 'validation'],
  Specs: ['gettingStarted', 'features'],
  Herbarium: ['gettingStarted'],
  Validation: ['what-suma', 'validations', 'checkers'],
  Glues: ['whatisglue', 'herbsshelf', 'herbs2gql', 'herbs2rest', 'herbs2knex', 'herbs2mongo', 'herbs2repl', 'suma2text', 'herbs-snippets'],
}

Object.keys(sidebar).map(property =>
  sidebar[property] = sidebar[property].map(item => `${property.toLowerCase()}/${item}`)
)

module.exports = { sidebar };