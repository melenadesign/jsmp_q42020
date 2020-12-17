module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'no-console': 0,
    'no-unused-vars': 'warn'
  },
  env: {
    es6: true,
    jest: true
  }
};
