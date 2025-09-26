import { defineConfig } from 'eslint/config'
import globals from 'globals'
import jsdoc from 'eslint-plugin-jsdoc'
import neostandard from 'neostandard'

export default defineConfig([
  ...neostandard(),
  {
    files: ['**/*.js'],
    plugins: { jsdoc },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.amd,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      ecmaVersion: 2018,
      sourceType: 'script',
    },

    rules: {
      'prefer-const': 'error',
      'jsdoc/require-jsdoc': 'warn',
      'no-var': 'error',
      'no-duplicate-imports': 'error',
      'no-label-var': 'error',
      'no-unsafe-finally': 'error',
      '@stylistic/indent': ['warn', 2],
      'no-unused-vars': 'error',
      '@stylistic/quotes': ['warn', 'single'],
      'no-undef-init': 'error',
      '@stylistic/no-trailing-spaces': 'off',
      '@stylistic/max-len': [
        'error', {
          code: 80,
          tabWidth: 4,
        }],
      'prefer-arrow-callback': 'error',
      'max-lines': ['error', 500],
      '@stylistic/function-call-argument-newline': ['error', 'never'],
      '@stylistic/array-element-newline': ['error', 'never'],
      'vars-on-top': 'error',
    },
  }])
