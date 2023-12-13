import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

let data = []
When('the user deletes the item from position {word}', function (position) {
  cy.takeData(position).then((items) => {
    data = items
    cy.log(data)
  })
  cy.deleteItem(position)
})

Then('the item at position {word} disappears from the list', function (position) {
  cy.validateDelete(position, data)
})
