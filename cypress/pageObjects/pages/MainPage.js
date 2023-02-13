class MainPage {
  acceptButton() {
    return cy.get('#onetrust-accept-btn-handler');
  }
  accountButton() {
    return cy.get('.SignInBox-module--container__mcpzG');
  }
  get sessionStorageBtn() {
    return cy.get('button[class="button large js-set-session-storage btn-login"]');
  }
}

export default new MainPage();
