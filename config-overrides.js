// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    ['babel-plugin-module-resolver'],
  ),
);
