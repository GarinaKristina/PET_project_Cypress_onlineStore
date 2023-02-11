class SignInPage {
  loginButton() {
    return cy.get('button[class="button large js-set-session-storage btn-login"]');
  }
  usernameInput() {
    return cy.get('#email');
  }

  passwordInput() {
    return cy.get('#password');
  }
}
export default new SignInPage();
