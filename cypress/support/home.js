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

Cypress.Commands.add('getPosition', function (value) {
    return cy.xpath(value).then(function (text) {
        let texto = text.text().match(/\d+/g);
        text = parseInt(texto)
        return cy.wrap(text)
    })
})

Cypress.Commands.add('validateNewPosition', function (cantItems) {
    let items = cantItems + 1
    cy.xpath("(//p[@class='story ng-binding'])[" + items + "]").should('be.visible')
})

Cypress.Commands.add('editarItem', function (position, imagen, descripcion) {
    cy.xpath("(//button[@class='btn btn-default' and text()='Edit'])[" + position + "]").click()
    cy.subirArchivo(imagen)
    cy.xpath(this.home.createItem.descriptionField).clear()
    cy.wait(3000)
    cy.xpath(this.home.createItem.descriptionField).type(descripcion)
    cy.xpath(this.home.createItem.createBtn).click()
})

Cypress.Commands.add('validateItem', function (position, imagen, descripcion) {
    // validar descripcion
    cy.xpath("(//DIV[@class='media-left'])[" + position + "]//P[@class='story ng-binding'][text()='" + descripcion + "']").should('be.visible')
    // validar foto (aunque la foto no se modifica por la nueva)
    cy.xpath("(//DIV[@class='media-left'])[" + position + "]//IMG[contains(@src,'jpg')]").should('be.visible')

})

Cypress.Commands.add('takeData', function (position) {
    let data = []
    cy.xpath("(//DIV[@class='media-left'])[" + position + "]").then(function (text) {
        let texto = text.text()
        texto = texto.replace('Edit', '').replace('Delete', '').trim()
        data.push(texto);
        cy.xpath("(//IMG[contains(@src,'jpg')])[" + position + "]").invoke('attr', 'src').then(function (srcValue) {
            let texto = text.text()
            data.push(srcValue);
            return data
        })
    })

})

Cypress.Commands.add('deleteItem', function (position) {
    cy.xpath("(//BUTTON[@type='button'][text()='Delete'])[" + position + "]").click()
    cy.xpath("//BUTTON[@class='btn btn-primary'][text()='Yes, delete it!']").click()
})

Cypress.Commands.add('validateDelete', function (position, data) {
    cy.xpath("//DIV[@class='media-left' and contains(@text,'" + data[0] + "')]", {timeout: 20000}).should('not.exist')
    cy.xpath("//IMG[contains(@src,'" + data[1] + "')]", {timeout: 20000}).should('not.exist')
})

Cypress.Commands.add('checkCaracters', function (length) {
    cy.xpath("//textarea[@rows='10']").invoke('attr', 'ng-maxlength').should('eq', length);

})

Cypress.Commands.add('checkText', function (string) {
    cy.xpath("//p[contains(text(),'"+string+"')]").should('be.visible')

})