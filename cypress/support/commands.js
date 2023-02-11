import mainPage from '../pages/MainPage';

Cypress.Commands.add('logInAccount', (email, password) => {
  mainPage.usernameInput().type(email).should('have.value', email);
  mainPage.passwordInput().type(password).should('have.value', password);
  mainPage.cookieBtn().click();
  mainPage.signInBtn().click();
});

Cypress.Commands.add('signIn', (email, password) => {
  mainPage.usernameInput().type(email).should('have.value', email);
  mainPage.passwordInput().type(password).should('have.value', password);
});

