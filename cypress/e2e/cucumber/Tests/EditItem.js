import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

When('the user edits an existing item {word} with the image {word} and the description {string}', function (position, picture, description) {
  cy.editarItem(position, picture, description)
})

Then('the change of the item {word} is displayed with the image {word} and the description {string}', function (position, picture, description) {
  cy.validateItem(position, picture, description)
})
