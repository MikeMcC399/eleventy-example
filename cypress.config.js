const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  projectId: 'y2sysj',
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:8080',
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
