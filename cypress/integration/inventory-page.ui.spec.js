describe('LoginPage: Given Inventory Page opened', () => {
  context('When user reviews the Inventory page', () => {
    it('Then user should see the title', () => {
      cy.contains(l10n.loginPage.title).should('be.visible');
    });
    it('Then user should see the page title', () => {});
    it('Then user should see the table title', () => {});
    it('Then user should see the burger button', () => {});
    it('Then user should see the backet button', () => {});
    it('Then user should see sorting control with default values', () => {});
    it('Then user should see 6 product cards by default', () => {});
  });
  context('When user reviews Product card', () => {
    it('Then user should see the item title', () => {});
    it('Then user should see the item description', () => {});
    it('Then user should see the item price', () => {});
    it('Then user should see the item image', () => {});
    it('Then user should see the Add to Card button', () => {});
  });

  context('When user adds some items to Card', () => {
    it('Then count of items is shown next to backet icon', () => {});
    it('Then Remove button is shown on Item card', () => {});
  });
  context('When user removes some items from Card', () => {
    it('Then count of items is decreased next to backet icon', () => {});
    it('Then Add to Card button is shown on Item card', () => {});
  });
});
