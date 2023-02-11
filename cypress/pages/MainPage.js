class MainPage {
  ltBtn() {
    return cy.get('#link_lt_lt');
  }
  acceptBtn() {
    return cy.get('#onetrust-accept-btn-handler');
  }
  accountBtn() {
    return cy.get('.SignInBox-module--container__mcpzG');
  }
  // menuBtn() {
  //   return cy.get('.menu__myhm[href="#"]');
  // }
  // linkRegisterBtn() {
  //   return cy.get('.link.register');
  // }

  // goBackBtn() {
  //   return cy.get('.button.go-back');
  // }
  loginBtn() {
    return cy.get('button[class="button large js-set-session-storage btn-login"]');
  }
  usernameInput() {
    return cy.get('#email');
  }

  passwordInput() {
    return cy.get('#password');
  }

  cookieBtn() {
    return cy.get('#modal-signup-form-privacy-policy');
  }

  signInBtn() {
    return cy.get('.button.large.js-submit-join');
  }
  signInUserNameBtn() {
    return cy.get('#modal-txt-signin-email');
  }
  signInPasswordBtn() {
    return cy.get('#modal-txt-signin-password');
  }
  get sessionStorageBtn() {
    return cy.get('button[class="button large js-set-session-storage btn-login"]');
  }
}

export default new MainPage();
