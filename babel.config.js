const presets = [
  [
    '@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }
  ],
];
const env = {
  test: {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      'transform-es2015-modules-commonjs',
      'babel-plugin-dynamic-import-node',
    ],
  },
};

module.exports = { presets, env };
