// eslint-disable-next-line import/no-extraneous-dependencies
const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins(
    ['module-resolver', {
      alias: {
        '~ui': './src/app/components',
        '~layouts': './src/app/layouts',
        '~pages': './src/app/pages',
        '~utils': './src/utils',
        '~state': './src/app/state',
      },
    }],
  ),
);
