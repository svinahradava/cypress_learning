# Naming Conventions for Pages and Components

## 📄 Pages

- **Location:** All page components should be placed in a `/pages` directory.
- **Naming Format:** Use **PascalCase** (e.g., `LoginPage`, `DashboardPage`, `UserProfilePage`).
- **Filename Matches Component:** The filename must exactly match the component name. e.g /pages/LoginPage.jsx or /pages/DashboardPage.

## 🧩 Components

- **Location:** Place components inside a `/components` directory, optionally nested by feature or type.
- **Naming Format:** Use **PascalCase** (e.g., `Header`, `ProductCard`, `SidebarMenu`).
- **Filename Matches Component:** Ensure the file name matches the component name.
- **Reusable Components:** Place in `components/common/` if used across multiple pages.

**Example:**
/components/Header.jsx
/components/ProductCard.jsx
/components/common/Loader.jsx
