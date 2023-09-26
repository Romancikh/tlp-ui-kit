module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:perfectionist/recommended-natural",
    "airbnb",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "prettier", "perfectionist"],
  rules: {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "object-curly-newline": "off",
    "prettier/prettier": "warn",
    quotes: ["error", "double"],
    "react/jsx-filename-extension": "off",
    "react/jsx-indent": "warn",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
  },
};
