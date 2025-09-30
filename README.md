# React + TypeScript + Vite + Tailwind + i18n

This template provides a modern, minimal setup for building React applications using TypeScript, Vite, Tailwind CSS, and internationalization (i18n). It is designed to be flexible for various projects, offering fast development with HMR, strong linting, and easy localization.

## Features

- **React**: Component-based UI development.
- **TypeScript**: Type safety and better developer experience.
- **Vite**: Lightning-fast build tool with Hot Module Replacement.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **i18n**: Locale setup for internationalization using [react-i18next](https://react.i18next.com/).
- **ESLint**: Configurable linting with type-aware rules and React-specific plugins.

## Getting Started

1. **Install dependencies:**

  ```bash
  npm install
  ```

2. **Start the development server:**

  ```bash
  npm run dev
  ```

3. **Build for production:**

  ```bash
  npm run build
  ```

## ESLint Configuration

For production-ready linting, enable type-aware rules and React-specific plugins:

```js
// eslint.config.js
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
   files: ['**/*.{ts,tsx}'],
   extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    reactX.configs['recommended-typescript'],
    reactDom.configs.recommended,
   ],
   languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
   },
  },
])
```

## Tailwind CSS Setup

Tailwind is pre-configured. You can start using its utility classes in your components:

```jsx
function Button() {
  return <button className="px-4 py-2 bg-blue-500 text-white rounded">Click me</button>
}
```

## i18n Setup

Internationalization is set up using [react-i18next](https://react.i18next.com/):

- Add your locale files in the `locales/` directory.
- Use the `useTranslation` hook in your components:

  ```jsx
  import { useTranslation } from 'react-i18next'

  function Welcome() {
   const { t } = useTranslation()
   return <h1>{t('welcome_message')}</h1>
  }
  ```

## Customization

- Add or remove plugins as needed for your project.
- Update ESLint, Tailwind, or i18n configuration to fit your requirements.

## Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [react-i18next Documentation](https://react.i18next.com/)

---

Feel free to use this template as a starting point for your next project!
