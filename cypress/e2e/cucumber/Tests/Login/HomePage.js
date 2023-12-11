import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


before(function () {
  cy.fixture('home.json').then(function (home) {
    this.home = home
  })
})

Given('el usuario se encuentra en la web application', function () {
  cy.log("hola")
  cy.visit('')

})
let cantItems
When('el usuario crea la pelicula {word} con descripcion {word}', function (pelicula, descripcion) {
  cy.obtenerTexto(this.home.list.tittle).then((items)=>{
    cantItems = items
  }
  )
  cy.createItem(pelicula, descripcion)

})

Then('el item se posiciona ultimo en la lista', function () {
  cy.validarItem(cantItems)
})
