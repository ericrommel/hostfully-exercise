const cucumber = require('cypress-cucumber-preprocessor').default

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: (arg0: string, arg1: any) => void) => {
    on('file:preprocessor', cucumber())
}