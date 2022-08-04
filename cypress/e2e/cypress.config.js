const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.pageLoadTimeout = 7000;
      allureWriter(on, config);
      return config;
    },
  },
});
