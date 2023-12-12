import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

before(function () {
  cy.fixture('home.json').then(function (home) {
    this.home = home
  })
})

let datos = []
When('el usuario elimina el item de la posicion {word}', function (posicion) {
  cy.tomarDatos(posicion).then((items) => {
    datos = items
    cy.log(datos)
  })
  cy.eliminarItem(posicion)
})

Then('el item de la posicion {word} desaparece de la lista', function (posicion) {
  cy.validarDelete(posicion, datos)
})
