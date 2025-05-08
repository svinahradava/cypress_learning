# Naming Conventions

## Pages

- All page components should be placed in the **/pages** directory.
- Page object files should be named in **camelCase**, based on the page name. Example: loginPage.js, cartPage.js

## Test Blocks (describe/context/it)

- Use Gherkin-style phrases to express test flow:
  **describe**('Component: Given some context', ...)
  **context**('When user performs an action', ...)
  **it**('Then the expected result should occur', ...)
- Be specific and clear. Avoid generic test names like "should log in".

## Selectors definition

- Define selectors in **/support/selectors.js**;
- Group selectors by page, with each page defined as a const using **camelCase**;
- Use **camelCase** for selectors names;

## UI elements localization

- Use an **l10n JSON** file to define all visible texts for pages;
- Group data by page, with each page as a top-level JSON node.
- Use camelCase for elements keys;
