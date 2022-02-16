module.exports = {
  root: true,
  extends: ['@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/flowtype',
    'prettier/react',
  ],
  rules: {
    'react-native/no-inline-styles': 'off',
  },
};
