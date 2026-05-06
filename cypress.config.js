const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5q6j7k',
  allowCypressEnv: false,

  e2e: {
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportTitle: 'Relatório de Testes v2',
    reportPageTitle: 'Relatório de Testes v2',
  },
   baseUrl: "https://automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
