const sidebar = {
  Introduction: ['getting-started', 'herbsjs'],
  Tutorial: ['introduction','new-project', 'create-entity', 'setup-database', 'migrations-repositories', 'working-usecases', 'graphql', 'herbsshelf', 'refactoring', 'consuming'],
  Project: [
    'motivation', 'architecture', 'ecosystem', 'roadmap', 'contributing', 'acknowledgements', 'logos', 'CoC', 'license'],
  UseCase: ['gettingStarted', 'features', 'steps', 'result'],
  Entity: ['gettingStarted', 'features', 'validation'],
  Validation: ['what-suma', 'validations', 'checkers'],
  Glues: ['whatisglue', 'herbs2gql', 'herbs2rest', 'herbs2knex', 'herbsshelf', 'herbs2rpl', 'suma2text', 'herbs-snippets', 'herbs2mongo']

}

Object.keys(sidebar).map(property =>
  sidebar[property] = sidebar[property].map(item => `${property.toLowerCase()}/${item}`)
)

module.exports = { sidebar };