module.exports = {
  env: { es6: true, node: true },
  extends: 'airbnb',
  parserOptions: { sourceType: 'module' },
  rules: {
    'max-len': [ 'warn', 100 ],
    'indent': [ 'error', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'warn', 'never' ],
    'spaced-comment': 'warn',
    'no-unused-vars': [ 'warn' ],
    'no-console': [ process.env.NODE_ENV === 'production' ? 'error' : 'warn' ],
<<<<<<< HEAD
    'no-shadow': ['error', { 'allow': ['cb', 'err'] }]
=======
    'no-shadow': ['error', { 'allow': ['cb', 'err'] }],
    'import/prefer-default-export': 'warn'
>>>>>>> 04e8e41f696108b8b4bc66155ddcff3b67193813
  }
};
