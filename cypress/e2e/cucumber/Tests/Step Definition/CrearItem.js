import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

before(function () {
  cy.fixture('home.json').then(function (home) {
    this.home = home
  })
})

Given('el usuario se encuentra en la web application', function () {
  cy.visit('')
})

let cantItems
When('el usuario crea la pelicula {word} con descripcion {word}', function (imagen, descripcion) {
  cy.obtenerNumero(this.home.list.tittle).then((items)=>{
    cantItems = items
  }
  )
  cy.createItem(imagen, descripcion)

})

Then('el item de la <word> y <word> se posiciona ultimo en la lista', function (imagen, descripcion) {
  cy.validarNuevoItem(cantItems)
  cy.validarItem(item, imagen, descripcion)
})
