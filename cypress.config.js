const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    failOnUncaughtException: false,
    defaultCommandTimeout: 10000,  // Ajusta el tiempo de espera según tus necesidades
    //retries: 2, // intentos
    watchForFileChanges: false,
    baseUrl: "https://immense-hollows-74271.herokuapp.com/",
    supportFile: "cypress/support/index.js",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
  },
});
