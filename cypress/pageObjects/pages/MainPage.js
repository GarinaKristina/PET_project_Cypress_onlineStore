class MainPage {
  acceptButton() {
    return cy.get('#onetrust-accept-btn-handler');
  }
  accountButton() {
    return cy.get('.SignInBox-module--container__mcpzG');
  }
  // cookieButton() {
  //   return cy.get('#modal-signup-form-privacy-policy');
  // }
  // signInButton() {
  //   return cy.get('.button.large.js-submit-join');
  // }
  get sessionStorageBtn() {
    return cy.get('button[class="button large js-set-session-storage btn-login"]');
  }
}

export default new MainPage();
