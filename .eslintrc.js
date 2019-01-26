module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'parserOptions': {
    'ecmaVersion': 2018,
  },
  'plugins': ['prettier'],
  'rules': {
    'prettier/prettier': 'error',
    'no-console': 'off',
  },
  'extends': ['plugin:prettier/recommended'],
};
