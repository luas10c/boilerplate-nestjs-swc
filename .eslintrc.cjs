const config = {
  root: true,
  env: {
    es2022: true,
    node: true
  },
  extends: ['prettier'],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 13
  },
  rules: {
    'prettier/prettier': 'error'
  }
}

module.exports = config
