module.exports = {
  parser: "@typescript-eslint/parser",
  requireConfigFile: false,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@react-native-community",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    // Define custom ESLint rules here, if needed.
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};