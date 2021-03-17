const sidebar = {
  Introduction: ['herbsjs', 'architecture', 'ecosystem'],
  UseCase: ['whatis', 'gettingStarted', 'features'],
  Entity: ['whatis', 'gettingStarted', 'features'],
  Glues: ['whatis', 'herbs2gql', 'herbs2rpl', 'herbsshelf'],
  Libs: ['suma'],
}

Object.keys(sidebar).map(property =>
  sidebar[property] = sidebar[property].map(item => `${property.toLowerCase()}/${item}`)
)

module.exports = { sidebar };
