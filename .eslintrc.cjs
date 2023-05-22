export default {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'prettier', 'import', 'react'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        printWidth: 100,
        trailingComma: 'all',
        singleQuote: true,
        bracketSpacing: true,
      },
    ],
    'no-unused-vars': 'warn',
    'react/self-closing-comp': 'warn',
    'no-console': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['type', 'builtin', 'object', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
    'react-refresh/only-export-components': 'warn',
  },
};

