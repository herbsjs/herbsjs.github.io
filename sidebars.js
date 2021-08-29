const sidebar = {
  Introduction: ['getting-started','herbsjs', 'motivation',  'architecture', 'ecosystem', 'contributing'],
  Tutorial: ['new-project', 'create-entity', 'repository', 'create-usecase', 'graphql', 'herbsshelf', 'refactoring', 'security'],
  UseCase: ['gettingStarted', 'features', 'steps', 'result'],
  Entity: ['gettingStarted', 'features', 'validation'],
  Glues: ['whatisglue', 'herbs2gql', 'herbs2rest', 'herbs2knex', 'herbsshelf', 'herbs2rpl', 'suma2text', 'herbs-snippets', 'herbs2mongo'],
  Institutional: ['acknowledgements', 'logos', 'CoC','license'],
}

Object.keys(sidebar).map(property =>
  sidebar[property] = sidebar[property].map(item => `${property.toLowerCase()}/${item}`)
)

module.exports = { sidebar };