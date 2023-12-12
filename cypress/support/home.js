require('cypress-xpath')
import 'cypress-file-upload';
Cypress.Commands.add('createItem', function (imagen, descripcion) {
    cy.subirArchivo(imagen)
    cy.xpath(this.home.createItem.descriptionField).clear().type(descripcion)
    cy.xpath(this.home.createItem.createBtn).click()
})

Cypress.Commands.add('subirArchivo', function (imagen) {
    const filePath = imagen;
    cy.xpath(this.home.createItem.imgBtn).attachFile(filePath);

})

Cypress.Commands.add('obtenerNumero', function (value) {
    return cy.xpath(value).then(function (text) {
        let texto = text.text().match(/\d+/g);
        text = parseInt(texto)
        return cy.wrap(text)
    })
})

Cypress.Commands.add('validarNuevoItem', function (cantItems) {
    let items = cantItems + 1
    cy.xpath("(//p[@class='story ng-binding'])[" + items + "]").should('be.visible')
})

Cypress.Commands.add('editarItem', function (item, imagen, descripcion) {
    cy.xpath("(//button[@class='btn btn-default' and text()='Edit'])[" + item + "]").click()
    cy.createItem(imagen, descripcion)
})

Cypress.Commands.add('validarItem', function (item, imagen, descripcion) {
    cy.log(item)
    // validar descripcion
    cy.xpath("(//DIV[@class='media-left'])[" + item + "]//P[@class='story ng-binding'][text()=" + descripcion + "]").should('be.visible')
    // validar foto (aunque la foto no se modifica por la nueva)
    cy.xpath("(//DIV[@class='media-left'])[" + item + "]//IMG[contains(@src,'jpg')]").should('be.visible')

})

Cypress.Commands.add('tomarDatos', function (posicion) {
    let datos = []
    cy.xpath("(//DIV[@class='media-left'])[" + posicion + "]").then(function (text) {
        let texto = text.text()
        texto = texto.replace(' ','').replace('Edit', '').replace('Delete', '')
        datos.push(texto);
        cy.xpath("(//IMG[contains(@src,'jpg')])["+posicion+"]").invoke('attr', 'src').then(function (srcValue) {
            let texto = text.text()
            datos.push(srcValue);
            return datos
        })
    })

})

Cypress.Commands.add('eliminarItem', function (posicion) {
    cy.xpath("(//BUTTON[@type='button'][text()='Delete'])["+posicion+"]").click()
    cy.xpath("//BUTTON[@class='btn btn-primary'][text()='Yes, delete it!']").click()
})

Cypress.Commands.add('validarDelete', function (posicion, datos) {
    cy.xpath("//DIV[@class='media-left' and contains(@text,'"+datos[0]+"')]").should('not.exist')
    cy.xpath("//IMG[contains(@src,'"+datos[1]+"')]").should('not.exist')
})
