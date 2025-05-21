// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import { generalItems } from './selectors';

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
  if (username !== '') {
    cy.get(loginPage.username).type(username);
  }
  if (password !== '') {
    cy.get(loginPage.password).type(password);
  }
  cy.get(loginPage.loginButton).click();
});

Cypress.Commands.add('logout', () => {
  cy.get(generalItems.burgerMenu).click();
  cy.get(generalItems.logOut).click();
});
