const { defaults } = require('jest-config');

module.exports = {
  transform: {
    '\\.(ts|js)x?$': 'ts-jest'
  },
  testEnvironment: 'node',
  roots: ['src'],
  testRegex: './src/.*\\.(test|spec)?\\.(ts|ts|tsx)$',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  verbose: true
};
