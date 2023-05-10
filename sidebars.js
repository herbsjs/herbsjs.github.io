const sidebar = {
  Introduction: [
    "introduction/getting-started",
    "introduction/herbsjs"],
  Tutorial: [
    "tutorial/introduction",
    "tutorial/new-project",
    "tutorial/create-entity",
    "tutorial/working-usecases",
    "tutorial/specs",
    "tutorial/repositories",
    "tutorial/migrations",
    "tutorial/graphql-rest"],
  ['Herbs Core']: [{
    ['Use Case']: [
      "usecase/gettingStarted",
      "usecase/features",
      "usecase/steps",
      "usecase/result"],
    Entity: [
      "entity/gettingStarted",
      "entity/features",
      "entity/validation"],
    Specs: [
      "specs/gettingStarted",
      "specs/features"],
    Herbarium: [
      "herbarium/gettingStarted"],
    Validation: [
      "validation/what-suma",
      "validation/validations",
      "validation/checkers"],
  }],
  Glues: [
    "glues/whatisglue",
    "glues/herbsshelf",
    "glues/herbs2gql",
    "glues/herbs2rest",
    { Knex: [
      "glues/herbs2knex/herbs2knex",
      "glues/herbs2knex/features",
      "glues/herbs2knex/relationships",
    ]},
    "glues/herbs2mongo",
    "glues/herbs2repl",
    "glues/suma2text",
    "glues/herbs-snippets"],
  Project: [
    "project/motivation",
    "project/roadmap",
    "project/architecture",
    "project/ecosystem",
    "project/assist",
    "project/contributing",
    "project/acknowledgements",
    "project/communitycontent",
    "project/logos",
    "project/CoC",
    "project/license"],
}

module.exports = { sidebar };
