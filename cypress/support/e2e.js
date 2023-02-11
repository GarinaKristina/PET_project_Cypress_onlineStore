import './commands';
require('@cypress/xpath');
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

require('@cypress/xpath');
