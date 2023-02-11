import SignInPage from '../pageObjects/pages/SignInPage';
import { url } from '../pageObjects/Data';

Cypress.Commands.add('open', () => {
  cy.visit(url);
});

Cypress.Commands.add('signIn', (email, password) => {
  SignInPage.usernameInput().type(email).should('have.value', email);
  SignInPage.passwordInput().type(password).should('have.value', password);
});

require('@cypress/xpath');
