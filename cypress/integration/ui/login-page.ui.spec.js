describe('Check cy.visit', () => {
  it('Should open login page for saucedemo', () => {
    cy.visit('/');
    cy.contains('Swag Labs');
  });
});
