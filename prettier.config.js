/** @type {import("prettier").Config} */
const config = {
  plugins: [],
  bracketSameLine: false,
  printWidth: 120,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  overrides: [
    {
      files: "*.html",
      options: {
        printWidth: 1024,
        htmlWhitespaceSensitivity: "css",
      },
    },
  ],
};

export default config;
