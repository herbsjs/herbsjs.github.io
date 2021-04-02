const sidebar = {
  Introduction: ['getting-started','herbsjs', 'motivation',  'architecture', 'ecosystem'],
  Tutorial: ['new-project', 'create-entity', 'repository', 'create-usecase', 'graphql', 'herbsshelf', 'refactoring', 'security'],
  UseCase: ['whatis', 'gettingStarted', 'features'],
  Entity: ['whatis', 'gettingStarted', 'features'],
  Validation: ['suma'],
  Glues: ['whatisglue', 'herbs2gql', 'herbs2knex', 'herbsshelf', 'herbs2rpl', 'suma2text', 'herbs-snippets'],
}

Object.keys(sidebar).map(property =>
  sidebar[property] = sidebar[property].map(item => `${property.toLowerCase()}/${item}`)
)

module.exports = { sidebar };
