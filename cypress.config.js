const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.eesti.ee',
    setupNodeEvents(on, config) {
    }
  }
})
