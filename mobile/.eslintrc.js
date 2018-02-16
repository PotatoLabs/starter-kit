module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'import/prefer-default-export': ['off'],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/display-name': ['off'],
    'react/jsx-filename-extension': ['off'],
  },
  env: {
    es6: true,
    node: true,
  },
}
