before(function () {
    cy.fixture('home.json').then(function (home) {
      this.home = home
    })
  })