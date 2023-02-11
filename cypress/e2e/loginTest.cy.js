import mainPage from '../pageObjects/pages/MainPage';
import { customerData } from '../pageObjects/Data';

context('HM online store', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);
    cy.open();
    mainPage.acceptButton().click();
  });
  it('should sign in an account', () => {
    mainPage.accountButton().click();
    cy.signIn(customerData.email, customerData.password);
  });
});
