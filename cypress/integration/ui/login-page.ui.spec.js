describe('LoginPage: Given Login Page opened',{ testIsolation: false }, () => {
 
   context('When user reviews the Login page', () => {
    beforeEach(() => {
      cy.visit('/'); 
    });
    
    it('Then user should see the title', () => {
      cy.contains(l10n.loginPage.title).should('be.visible');
    });
    it('Then user should see Username field with placeholder', () => {
      cy.get(loginPage.username)
        .should('have.attr', 'placeholder', l10n.loginPage.loginform.username)
        .and('have.value', '');
    });
    it('Then User should see Password field with placeholder', () => {
      cy.get(loginPage.password)
        .should('have.attr', 'placeholder', l10n.loginPage.loginform.password)
        .and('have.value', '');
    });
    it('Then User should see Login button', () => {
      cy.get(loginPage.loginButton).should(
        'have.attr',
        'value',
        l10n.loginPage.loginform.login
      );
    });
  });

  context(
    'When STANDARD user enters valid credentials and clicks Login button',
    () => {
      beforeEach(() => {
        cy.login(users.standardUser.username, users.standardUser.password);
      });
      it('Then user should be navigated to the Inventory page', () => {
        cy.url().should('include', '/inventory');
      });
    }
  );

  context(
    'When LOCKED user enters valid creadentials and clicks Login button',
    () => {
      beforeEach(() => {
        cy.login(users.lockedUser.username, users.lockedUser.password);
      });
      it('Then user should see error message about locked user', () => {
        cy.get(loginPage.errorMessage).contains(
          l10n.loginPage.errors.lockedOutUser
        );
      });
      it('Then user should see the error close button', () => {
        cy.get(loginPage.errorButton).should('be.visible');
      });
      it('Then the Username field should be underlined with a red line', () => {
        cy.get(loginPage.username).should(
          'have.css',
          'border-bottom-color',
          'rgb(226, 35, 26)'
        );
      });
      it('Then user should see a red cross icon next to the Username field', () => {
        cy.get(loginPage.username)
          .parent()
          .find(loginPage.errorIcon)
          .should('be.visible');
      });
      it('Then user should see a red cross icon next to the Password field', () => {
        cy.get(loginPage.password)
          .parent()
          .find(loginPage.errorIcon)
          .should('be.visible');
      });
      it('Then the Password field should be underlined with a red line', () => {
        cy.get(loginPage.password).should(
          'have.css',
          'border-bottom-color',
          'rgb(226, 35, 26)'
        );
      });
    }
  );

  context.skip('When STANDARD user logs out', () => {
    it('Then user should be navigated to the Login page', () => {});
    it('Then user should see the title', () => {});
    it('Then user should see empty Username field with placeholder', () => {});
    it('Then User should see empty Password field with placeholder', () => {});
    it('Then User should see Login button', () => {});
  });

  context.skip(
    'When STANDARD user enters invalid username and clicks Login button',
    () => {
      it('Then user should see error message about invalid credentials', () => {});
      it('Then user should see a red cross icon next to the Username field', () => {});
      it('Then user should see a red cross icon next to the Password field', () => {});
      it('Then user should see the error close button', () => {});
      it('Then the Username field should be underlined with a red line', () => {});
      it('Then the Password field should be underlined with a red line', () => {});
    }
  );

  context.skip(
    'When STANDARD user enters username in uppercase and clicks Login button',
    () => {
      it('Then user should be navigated to the Inventory page', () => {});
    }
  );

  context.skip(
    'When STANDARD user does not specify username and clicks Login button',
    () => {
      it('Then user should see error message about missing Username', () => {});
      it('Then user should see a red cross icon next to the Username field', () => {});
      it('Then user should see a red cross icon next to the Password field', () => {});
      it('Then user should see the error close button', () => {});
      it('Then the Username field should be underlined with a red line', () => {});
      it('Then the Password field should be underlined with a red line', () => {});
    }
  );

  context.skip(
    'When STANDARD user does not specify password and clicks Login button',
    () => {
      it('Then user should see error message about missing Password', () => {});
      it('Then user should see a red cross icon next to the Username field', () => {});
      it('Then user should see a red cross icon next to the Password field', () => {});
      it('Then user should see the error close button', () => {});
      it('Then the Username field should be underlined with a red line', () => {});
      it('Then the Password field should be underlined with a red line', () => {});
    }
  );

  context.skip(
    'When STANDARD user does not specify credentials and clicks Login button',
    () => {
      it('Then user should see error message about missing Username', () => {});
      it('Then user should see a red cross icon next to the Username field', () => {});
      it('Then user should see a red cross icon next to the Password field', () => {});
      it('Then user should see the error close button', () => {});
      it('Then the Username field should be underlined with a red line', () => {});
      it('Then the Password field should be underlined with a red line', () => {});
    }
  );
});
