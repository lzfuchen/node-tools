module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'lines-between-class-members': 'off',
    'no-dupe-class-members': 'off',
    'no-else-return': 'off',
    'no-unused-expressions': 'off'
  }
}
