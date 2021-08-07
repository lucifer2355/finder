module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['10x'],
  rules: {
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
    ],
  },
};
