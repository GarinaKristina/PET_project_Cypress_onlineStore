import mainPage from '../pageObjects/pages/MainPage';
import menuComponents from '../pageObjects/components/menuComponents';

context('HM online store', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);
    cy.open();
    mainPage.acceptButton().click();
  });
  it('dresses items existing on the menu, title contain "Dresses"', () => {
    menuComponents.menuIcon().should('be.visible');
    menuComponents.menuIcon().click();
    menuComponents.ladiesButton().click();
    menuComponents.dressesButton().should('be.visible').click({ force: true, multiple: true });
    cy.title().should('contain', 'Dresses');
  });
});
