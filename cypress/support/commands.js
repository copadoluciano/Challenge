require('cypress-xpath')
import './home'
Cypress.Commands.add('locators', function   ()  {
    cy.fixture("home.json").then(function (home) {
        this.home = home
    })
})



