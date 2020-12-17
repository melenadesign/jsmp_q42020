module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 6
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx']
      }
    }
  },
  env: {
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  overrides: [
    {
      files: 'src/*.(test).ts',
      excludedFiles: './docs/*.*'
    }
  ],
  rules: {
    'no-console': 0,
    'prettier/prettier': 2,
    'no-unused-vars': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/dot-notation': [
      'warn',
      {
        allowKeywords: true,
        allowPrivateClassPropertyAccess: false
      }
    ],
    '@typescript-eslint/comma-dangle': ['error', 'never']
  }
};
