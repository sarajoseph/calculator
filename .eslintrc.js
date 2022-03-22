module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
		'eol-last': ['error', 'never'],
    'indent': ['error', 'tab'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  }
}
