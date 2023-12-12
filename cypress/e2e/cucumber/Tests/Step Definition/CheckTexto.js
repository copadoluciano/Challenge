import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

before(function () {
  cy.fixture('home.json').then(function (home) {
    this.home = home
  })
})

Then('el usuario valida que exista el texto {string}', function (string) {
  cy.checkCaracters(string)
})

