import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

before(function () {
  cy.fixture('home.json').then(function (home) {
    this.home = home
  })
})

let datos = []
Then('el usuario chequea la {word} de caracteres maximos', function (longitud) {
  cy.checkText(longitud)
})

