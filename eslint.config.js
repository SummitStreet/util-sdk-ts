import globals from "globals";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";
import js from "@eslint/js";
import jsdoc from "eslint-plugin-jsdoc";
import markdown from "@eslint/markdown";
import prettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["build/**", "dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    files: ["**/*.html"],
    plugins: { html },
    languageOptions: {
      parser: htmlParser,
      globals: globals.browser,
    },
    rules: {
      ...html.configs.recommended.rules,
      "html/indent": "off",
      "html/attrs-newline": "off",
      "html/no-extra-spacing-attrs": "off",
      "html/no-extra-spacing-tags": "off",
      "html/require-closing-tags": "off",
      "html/require-lang": "error",
      "no-console": ["warn", { allow: ["error", "warn"] }],
      "no-undef": "error",
      "no-unused-vars": "warn",
    },
  },
  {
    files: ["**/*.md"],
    plugins: { markdown },
    processor: "markdown/markdown",
    rules: {
      "markdown/no-invalid-label-refs": "error",
    },
  },
  {
    files: ["**/*.md/*.js", "**/*.md/*.ts"],
    rules: {
      "no-console": "off",
    },
  },
  {
    files: ["src/**/*.ts", "scripts/**/*.ts", "tests/**/*.ts", "*.ts"],
    plugins: { jsdoc, "simple-import-sort": simpleImportSort },
    languageOptions: {
      parser: tseslint.parser,
      globals: { ...globals.node, ...globals.vitest, ...globals.browser },
    },
    rules: {
      ...jsdoc.configs["flat/contents-typescript-error"].rules,
      "jsdoc/require-file-overview": "error",
      "jsdoc/require-description": "error",
      "jsdoc/require-jsdoc": "error",
      "jsdoc/text-escaping": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "max-len": [
        "error",
        {
          code: 120,
          comments: 80,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        },
      ],
    },
  },
];
