import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Then('the user validates that the text {string} exists', function (string) {
  cy.checkText(string)
})

