# 🧠 CONTEXT.md

> 💬 **Note for AI assistants (e.g. Copilot, ChatGPT, Cody):**  
> This file defines the architecture, coding conventions, and dependencies of this project.  
> Use it to infer folder structure, naming patterns, and preferred styles when generating or suggesting code.

---

## 🧰 Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) as build tool
- [TailwindCSS](https://tailwindcss.com/) for styling
- [React Router v7](https://reactrouter.com/) for routing
- [react-i18next](https://react.i18next.com/) for localization
- [ESLint](https://eslint.org/) for linting
- [vite-plugin-svgr](https://react-svgr.com/docs/vite/) for SVG imports

---

## 📂 Project Structure

src/
├─ assets/ # Static files
├─ components/ # Atomic Design components (atoms, molecules, organisms, templates)
├─ contexts/ # React Context providers
├─ hooks/ # Reusable custom hooks
├─ i18n/ # Internationalization setup
├─ locales/ # Translation files
├─ pages/ # Application pages
├─ routes/ # Centralized routes
├─ App.tsx # Root component
├─ main.tsx # Entry point
└─ index.css # Global styles

---

## 🧠 Development Guidelines

- Architecture: Follow Atomic Design principles for component structure.
- Hooks: Prefer functional components and custom hooks over class components.
- Imports: Use absolute imports configured via tsconfig.paths.json.
- Translations: Keep locale keys organized by feature or domain.
- Styling: Use Tailwind utility classes; avoid inline styles unless necessary.
- Naming: Components → PascalCase, hooks → useCamelCase, constants → UPPER_SNAKE_CASE.
