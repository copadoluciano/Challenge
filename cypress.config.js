const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: "http://immense-hollows-74271.herokuapp.com/",
    supportFile: "cypress/support/index.js",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
  },
});
