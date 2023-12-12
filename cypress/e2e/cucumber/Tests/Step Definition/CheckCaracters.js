import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

let datos = []
Then('user checks maximum character {word}', function (length) {
  cy.checkCaracters(length)
})

