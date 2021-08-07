module.exports = {
  parser: "babel-eslint",
  root: true,
  extends: '@react-native-community',
  plugins: ['10x', "prettier"],
  rules: {
    "semi": ["error", "always"],
    '10x/auto-import': [
      'error',
      {
        imports: {
          useRef: "import {useRef} from 'react'",
          useEffect: "import {useEffect} from 'react'",
          useState: "import {useState} from 'react'",
          useCallback: "import {useCallback} from 'react'",
        },
      },
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['.'],
      },
    },
  },
};
