# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the
configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install
[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
and
[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## Instru;óes utilizadas no projeto

- npm create vite@latest

  - framework React
  - Typescript + SWC

- criar pasta .vscode
  - settings.json -> para configurar o vscode, fica alterando automaticamente o
    arquivo ao salvá-lo, seguindo as configurações que foram estabelecidas neste
    json.
  - "editor.defaultFormatter": "esbenp.prettier-vscode" usar a extensão prettier

```settings.json
{
  "window.zoomLevel": 1,
  "breadcrumbs.enabled": false,
  "editor.fontSize": 16,
  "debug.console.fontSize": 16,
  "terminal.integrated.fontSize": 16,
  "editor.glyphMargin": false,
  "workbench.activityBar.location": "hidden",
  "editor.lineNumbers": "on",
  "files.eol": "\n", // Final de linha sempre será LF
  "editor.tabSize": 2,

  // 🛠 Formatação e Lint
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[xml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[svg]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

- criar arquivo .prettierrc.json na raiz do projeto

  - configura formatações automáticas ao editar os arquivos

- npm install

  - instala as dependências listadas no package.json

- npm run dev

## Extensões utilizadas

- Prettier: Prettier - Code formatter Prettier prettier.io

- ESLint: ESLint Microsoft Integrates ESLint JavaScript into VS Code.

- CSS Modules: CSS Modules - clinyong - Visual Studio Code extension for CSS
  Modules

  - Extension for CSS Modules, which supports: Autocomplete and Go to definition

- Om Theme (A Darker Dracula Theme)

- Material Icon Thme

## Arquivos e pastas do projeto

- Pasta public
  - os recursos na pasta public são acessados diretamente pela url '/vite.svg'

## Revisão

- Revisei até aula 05 - Entenda a técnica de Pomodoro - 30/07/2025

## Paradas

- Parei no início da aula 48. ContextAPI - useContext + useState ...
