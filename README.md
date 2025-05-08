# cypress_learning

## 🧪 Running Cypress Tests

You can run Cypress in **headless mode** or in **debug mode**.

### 🔹 Headless Mode

npx cypress run

### 🔹 Debug Mode

npx cypress open

Documentation

- [Git Workflow Strategy](./docs/git-strategy.md)
- [VS Code Shortcuts](./docs/VSCode-hotkeys.md)

## Setup

To run the tests locally, you must create a file `cypress/sensitive-data/**env**-users.json` based on the provided structure in `env-users.example.json`.

1. Create cypress/sensitive-data/**env**-users.json replace **env** with your environment name.
2. Copy the example file: cypress/sensitive-data/env-users.example.json to cypress/sensitive-data/**env**-users.json.
3. Replace the placeholders with real credentials (do NOT commit this file).
