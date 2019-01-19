module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@ycm.jason/eslint-config',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
