import { customerData } from '../pageObjects/Data';
import { MainPage } from '../pageObjects/pages/index';

context('Possibilities to log in as a customer', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);
    cy.open();
    MainPage.acceptButton().click();
  });
  it('should log in an account', () => {
    MainPage.accountButton().click();
    cy.signIn(customerData.email, customerData.password);
  });
});
