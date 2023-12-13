import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


Given('the user is in the web application', function () {
  cy.visit('')
})

let cantItems
When('the user creates the movie {word} with description {word}', function (picture, descripcion) {
  cy.getPosition(this.home.list.tittle).then((items)=>{
    cantItems = items
  }
  )
  cy.createItem(picture, descripcion)

})

Then('the image {word} and description {word} is positioned last in the list', function (picture, descripcion) {
  let position = cantItems + 1
  cy.validateNewPosition(cantItems)
  cy.validateItem(position, picture, descripcion)
})
