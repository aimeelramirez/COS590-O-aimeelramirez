module.exports = {
  presets: [
    [
    "@babel/preset-env", { "loose": true }],
    '@babel/preset-react',
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    "@babel/plugin-transform-class-properties",
    "@babel/plugin-transform-private-methods",
    "@babel/plugin-transform-typescript",
    ['@babel/plugin-transform-runtime', { regenerator: true }],
  ],
};
