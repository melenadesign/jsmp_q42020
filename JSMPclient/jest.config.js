const { defaults } = require('jest-config');

module.exports = {
  transform: {
    '\\.(ts|js)x?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      'identity-obj-proxy'
  },
  roots: ['src'],
  testRegex: './src/.*\\.(test|spec)?\\.(ts|ts|tsx)$',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'scss'],
  verbose: true
};
