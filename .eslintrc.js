module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  plugins: [
    'react',
    '@typescript-eslint',
  ],

  rules: {
    'max-len': 'off',
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',

    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',

    '@typescript-eslint/rule-name': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },

  parserOptions: {
    project: './tsconfig.eslint.json',

    sourceType: 'module',
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true,
    }
  },

  env: {
    browser: true,
    es6: true
  },  

  globals: {
    window: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
