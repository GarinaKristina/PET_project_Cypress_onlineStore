import mainPage from '../pages/MainPage';
import { customerData } from '../pages/Data';

context('HM online store', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);
    cy.visit('https://www2.hm.com');
  });
  it('should sign in on account', () => {
    mainPage.acceptBtn().click();
    mainPage.accountBtn().click();
    cy.signIn(customerData.email, customerData.password);
    // cy.get('button[class="button large js-set-session-storage btn-login"]').click();
  });
});
