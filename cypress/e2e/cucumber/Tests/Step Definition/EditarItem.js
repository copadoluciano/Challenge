import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

before(function () {
  cy.fixture('home.json').then(function (home) {
    this.home = home
  })
})


When('el usuario edita el item existente {word} con la imagen {word} y la descripcion {word}', function (item, imagen, descripcion) {
  cy.editarItem(item, imagen, descripcion)
})

Then('se visualiza el cambio del item {word} con la imagen {word} y la descripcion {word}', function (item, imagen, descripcion) {
  cy.validarItem(item, imagen, descripcion)
})
