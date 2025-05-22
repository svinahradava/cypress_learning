import { Footer, generalItems, inventoryPage } from '../../support/selectors';
import { inventoryPageReq } from '../../support/requirements';

describe('InventoryPage: Given Inventory Page opened', () => {
  context('InventoryPage: When user reviews the Inventory page', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login(users.standardUser.username, users.standardUser.password);
    });
    it('InventoryPage: Then user should see the page title', () => {
      cy.contains(l10n.generalItems.pageTitle).should('be.visible');
    });
    it('Then user should see the table title', () => {
      cy.contains(l10n.inventoryPage.tableTitle).should('be.visible');
    });
    it('InventoryPage: Then user should see the burger button', () => {
      cy.get(generalItems.burgerMenu)
        .parent()
        .should('have.class', 'bm-burger-button')
        .should('be.visible');
    });
    it('InventoryPage: Then user should see the basket button', () => {
      cy.get(generalItems.shoppingCartLink).should('be.visible');
    });
    it('InventoryPage: Then user should see sorting control with default value', () => {
      cy.get(generalItems.sortingControl)
        .should('be.visible')
        .contains(l10n.generalItems.sortingOptions.nameAsc);
    });
    it('InventoryPage: Then user should see 6 product cards by default', () => {
      cy.get(inventoryPage.inventoryItem).should(
        'have.length',
        inventoryPageReq.numberOfProductCards
      );
    });
  });

  context('InventoryPage: When user reviews Footer', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login(users.standardUser.username, users.standardUser.password);
    });

    it('InventoryPage: Then user should see twitter link', () => {
      cy.get(Footer.twitterLink)
        .should('be.visible')
        .should('have.attr', 'href', 'https://twitter.com/saucelabs');
    });
    it('InventoryPage: Then user should see facebook link', () => {
      cy.get(Footer.facebookLink)
        .should('be.visible')
        .should('have.attr', 'href', 'https://www.facebook.com/saucelabs');
    });
    it('InventoryPage: Then user should see linkedin link', () => {
      cy.get(Footer.linkedinLink)
        .should('be.visible')
        .should(
          'have.attr',
          'href',
          'https://www.linkedin.com/company/sauce-labs/'
        );
    });
    it('InventoryPage: Then user should see Copyright text', () => {
      cy.contains(l10n.generalItems.footerText).should('be.visible');
    });
    it.skip('InventoryPage: Then user should see Privacy Policy link', () => {
      cy.get(Footer.privacyPolicyLink).should('be.visible');
      //TODO
    });
    it.skip('InventoryPage: Then user should see Term Of Service link', () => {
      cy.get(Footer.termOfServiceLink).should('be.visible');
      //TODO
    });
  });

  context.skip('InventoryPage: When user reviews Product card', () => {
    it('Then user should see the item title', () => {});
    it('Then user should see the item description', () => {});
    it('Then user should see the item price', () => {});
    it('Then user should see the item image', () => {});
    it('Then user should see the Add to Card button', () => {});
  });

  context.skip('When user adds items to Card', () => {
    it('Then count of items is shown next to backet icon', () => {});
    it('Then Remove button is shown on Item card', () => {});
  });
  context.skip('When user removes items from Card', () => {
    it('Then count of items is decreased next to backet icon', () => {});
    it('Then Add to Card button is shown on Item card', () => {});
  });
  context.skip('When user clicks on Product title', () => {});
  context.skip('When user clicks on Basket icon', () => {});
  context.skip('When user clicks on Sorting Control', () => {});
  context.skip('When user chooses Name descending soring', () => {});
  context.skip('When user chooses Price ascending soring', () => {});
  context.skip('When user chooses Price descending soring', () => {});
  context.skip('When user clicks on Burger menu', () => {});
});
