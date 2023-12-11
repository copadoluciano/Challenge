require('cypress-xpath')
import 'cypress-file-upload';
Cypress.Commands.add('createItem', function(pelicula, descripcion) {
    cy.subirArchivo(pelicula)
    cy.xpath(this.home.createItem.descriptionField).type(descripcion)
    cy.xpath(this.home.createItem.createBtn).click()
})

Cypress.Commands.add('subirArchivo', function (pelicula) {
    const filePath = pelicula;
    cy.xpath(this.home.createItem.imgBtn).attachFile(filePath);

})




Cypress.Commands.add('obtenerTexto', function (value){
    return cy.xpath(value).then(function (text) {
        let texto = text.text().match(/\d+/g);
        text = parseInt(texto)
        return cy.wrap(text)


})
})

Cypress.Commands.add('validarItem', function (cantItems){
    let items = cantItems+1
    cy.xpath("(//p[@class='story ng-binding'])["+items+"]").should('be.visible')
})


