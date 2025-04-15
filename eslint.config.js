import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";

// 기본 규칙 정의
const basicRules = {
  // 기본 코드 스타일
  "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
  "prefer-const": "warn",
  "no-console": ["warn", { allow: ["warn", "error"] }],
  "no-nested-ternary": "warn",
};

// React 관련 규칙
const reactRules = {
  // JSX 관련 규칙
  "react/jsx-no-undef": "error",
  "react/jsx-uses-vars": "warn",
  "react/jsx-key": "warn",
  "react/no-array-index-key": "warn",
  "react/jsx-max-props-per-line": ["warn", { maximum: 1, when: "multiline" }],
  "react/no-unescaped-entities": "warn",
  "react/jsx-sort-props": [
    "warn",
    {
      callbacksLast: true,
      shorthandFirst: true,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],
  "react/display-name": "warn",
  "react/jsx-handler-names": [
    "warn",
    {
      eventHandlerPrefix: "handle",
      eventHandlerPropPrefix: "on",
    },
  ],
  "react/self-closing-comp": "warn",
  "react/jsx-boolean-value": ["warn", "never"],
  "react/jsx-no-useless-fragment": "warn",
  "react/jsx-curly-brace-presence": [
    "warn",
    { props: "never", children: "never" },
  ],
};

// React Hooks 관련 규칙
const reactHooksRules = {
  "react-hooks/exhaustive-deps": "warn",
  "react-hooks/rules-of-hooks": "error",
};

// React Fast Refresh 관련 규칙
const reactRefreshRules = {
  "react-refresh/only-export-components": [
    "warn",
    { allowConstantExport: true },
  ],
  "react-refresh/never-export-anonymous-functions": "error",
  "react-refresh/never-export-non-component": "error",
  "react-refresh/invalid-hook-usage": "error",
  "react-refresh/refresh-regenerator": "warn",
};

// 임포트 정렬 규칙
const importRules = {
  "simple-import-sort/imports": "warn",
  "simple-import-sort/exports": "warn",
  "unused-imports/no-unused-imports": "error",
};

export default [
  // 무시할 디렉토리
  {
    ignores: ["dist", "node_modules"],
  },
  // Node.js 전용 설정 (ESLint, Vite 등 설정 파일용)
  {
    files: ["vite.config.", "eslint.config."],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
  },
  // React 및 브라우저 환경 설정
  {
    files: ["*/.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      "react-refresh": reactRefreshPlugin,
      "unused-imports": unusedImportsPlugin,
    },
    settings: {
      react: {
        version: "detect", // 리액트 버전 감지
      },
    },
    rules: {
      // 기본 ESLint 규칙
      ...js.configs.recommended.rules,
      // React 플러그인 규칙
      ...reactPlugin.configs.recommended.rules,
      // React Hooks 플러그인 규칙
      ...reactHooksPlugin.configs.recommended.rules,
      // Prettier 충돌 방지 규칙
      ...prettier.rules,

      // 사용자 정의 규칙
      ...basicRules,
      ...reactRules,
      ...reactHooksRules,
      ...reactRefreshRules,
      ...importRules,
    },
  },
];