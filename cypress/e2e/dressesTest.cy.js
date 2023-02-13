import { MainPage } from '../pageObjects/pages/index';
import menuComponents from '../pageObjects/components/menuComponents';

context('As a customer I could choose the items', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);
    cy.open();
    MainPage.acceptButton().click();
  });
  it('dresses items existing on the menu, title contain "Dresses"', () => {
    menuComponents.menuIcon().should('be.visible');
    menuComponents.menuIcon().click();
    menuComponents.ladiesButton().click();
    menuComponents.dressesButton().should('be.visible').click({ force: true, multiple: true });
    cy.title().should('contain', 'Dresses');
  });
});
