// jest.config.js
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // This line should be kept even with nothing to be ignored, otherwise the transform will not take place.
  // Not quite sure about the reason.
  transformIgnorePatterns: [
    '/node_modules/(?!(react-native|@react-native|react-navigation)/)',
      '/node_modules/(?!@react-navigation/elements)',
      '/node_modules/(?!@react-native/js-polyfills)',
      '/node_modules/',
    ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '\\.snap$',
  ],
  cacheDirectory: '.jest/cache',
};
