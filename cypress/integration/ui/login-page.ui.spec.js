describe('LoginPage: Given Login Page opened', () => {
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
        cy.visit('/');
        cy.login(users.standardUser.username, users.standardUser.password);
      });
      it('Then user should be navigated to the Inventory page', () => {
        cy.url().should('include', '/inventory');
      });
    }
  );

  context(
    'When LOCKED user enters valid credentials and clicks Login button',
    () => {
      beforeEach(() => {
        cy.visit('/');
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

  context('When STANDARD user logs out', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.login(users.standardUser.username, users.standardUser.password);
      cy.logout();
    });
    it('Then user should be navigated to the Login page', () => {
      cy.url().should('include', '/');
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
    'When STANDARD user enters invalid username and clicks Login button',
    () => {
      beforeEach(() => {
        cy.visit('/');
        cy.login(
          users.errorUsernameUser.username,
          users.errorUsernameUser.password
        );
      });
      it('Then user should see error message about wrong credentials user', () => {
        cy.get(loginPage.errorMessage).contains(
          l10n.loginPage.errors.invalidCredentials
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

  context.skip(
    'When STANDARD user enters username in uppercase and clicks Login button',
    () => {
      beforeEach(() => {
        cy.visit('/');
        cy.login(
          users.standarUppercaseUser.username,
          users.standarUppercaseUser.password
        );
      });
      it('Then user should be navigated to the Inventory page', () => {
        // TODO: https://github.com/svinahradava/cypress_learning/issues/3
        cy.url().should('include', '/inventory');
      });
    }
  );

  context(
    'When STANDARD user does not specify username and clicks Login button',
    () => {
      beforeEach(() => {
        cy.visit('/');
        cy.login('', users.standardUser.password);
      });
      it('Then user should see error message about missing Username', () => {
        cy.get(loginPage.errorMessage).contains(
          l10n.loginPage.errors.missingUsername
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

  context(
    'When STANDARD user does not specify password and clicks Login button',
    () => {
      beforeEach(() => {
        cy.visit('/');
        cy.login(users.standardUser.username, '');
      });
      it('Then user should see error message about missing Password', () => {
        cy.get(loginPage.errorMessage).contains(
          l10n.loginPage.errors.missingPassword
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

  context(
    'When STANDARD user does not specify credentials and clicks Login button',
    () => {
      beforeEach(() => {
        cy.visit('/');
        cy.login('', '');
      });
      it('Then user should see error message about missing Username', () => {
        cy.get(loginPage.errorMessage).contains(
          l10n.loginPage.errors.missingUsername
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
});
