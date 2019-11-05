module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', "eslint:recommended",
  "plugin:react/recommended",
  "plugin:@typescript-eslint/recommended",
  "prettier/@typescript-eslint",
  "plugin:prettier/recommended"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['react', "@typescript-eslint", "prettier", "import"],
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.tsx']}],
    "prettier/prettier": ["error", { "singleQuote": true }],
    'react/jsx-curly-newline': 'off',
    'react/prop-types': 'off',
    'react/jsx-indent':  'off',
     // turn on errors for missing imports
     "import/no-unresolved": 0
    },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".d.ts"]
    },
    "import/resolver": {
      // use <root>/tsconfig.json
      "typescript": {
        "alwaysTryTypes": true // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
      },

      // use <root>/path/to/folder/tsconfig.json
      "typescript": {
        "directory": "/"
      },
    },
  },
};
