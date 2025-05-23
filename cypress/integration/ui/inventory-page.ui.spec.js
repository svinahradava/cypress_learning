import { Footer, generalItems, inventoryPage } from '../../support/selectors';
import { inventoryPageReq } from '../../support/requirements';

describe('InventoryPage: Given Inventory Page opened', () => {
  context.skip('InventoryPage: When user reviews the Inventory page', () => {
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

  context.skip('InventoryPage: When user reviews Footer', () => {
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

  context('InventoryPage: When user reviews Product cards', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login(users.standardUser.username, users.standardUser.password);
    });
    it('Then user should see expected title for each product', () => {
      cy.get(inventoryPage.inventoryItem).each(($el, index) => {
        const expected = l10n.inventoryPage.expectedProducts[index];
        // check item title
        cy.wrap($el)
          .find(inventoryPage.inventoryItemName)
          .invoke('text')
          .then((actualName) => {
            try {
              expect(actualName.trim()).to.eq(expected.name);
            } catch (err) {
              Cypress.log({
                message: ` wrong name ${index + 1}: expected "${expected.name}", recieved "${actualName.trim()}"`,
              });
            }
          });
      });
    });
    it('Then user should see expected description for each product', () => {
      cy.get(inventoryPage.inventoryItem).each(($el, index) => {
        const expected = l10n.inventoryPage.expectedProducts[index];
        // check item description
        cy.wrap($el)
          .find(inventoryPage.inventoryItemDescription)
          .invoke('text')
          .then((actualDescription) => {
            try {
              expect(actualDescription.trim()).to.eq(expected.description);
            } catch (err) {
              Cypress.log({
                message: ` TODO wrong description ${index + 1}: expected "${expected.description}", recieved "${actualDescription.trim()}"`,
              });
            }
          });
      });
    });
    it('Then user should see expected price for each product', () => {
      cy.get(inventoryPage.inventoryItem).each(($el, index) => {
        const expected = l10n.inventoryPage.expectedProducts[index];
        // check item price
        cy.wrap($el)
          .find(inventoryPage.inventoryItemPrice)
          .invoke('text')
          .then((actualPrice) => {
            try {
              expect(actualPrice.trim()).to.eq(expected.price);
            } catch (err) {
              Cypress.log({
                message: ` TODO wrong price ${index + 1}: expected "${expected.price}", recieved "${actualPrice.trim()}"`,
              });
            }
          });
      });
    });
    it('Then user should see image for each product', () => {
      cy.get(inventoryPage.inventoryItem).each(($el, index) => {
        const expected = l10n.inventoryPage.expectedProducts[index];
        // check item image
        cy.wrap($el)
          .find('img.inventory_item_img')
          .should('have.attr', 'src')
          .and('not.be.empty');
      });
    });
    it('Then user should see Add to cart for each product', () => {
      cy.get(inventoryPage.inventoryItem).each(($el, index) => {
        const expected = l10n.inventoryPage.expectedProducts[index];
        cy.wrap($el)
          .find('button')
          .should('exist')
          .and('have.text', l10n.inventoryPage.addToCart);
      });
    });
  });

  context.skip('When user adds items to Card', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login(users.standardUser.username, users.standardUser.password);
      cy.
    });
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
