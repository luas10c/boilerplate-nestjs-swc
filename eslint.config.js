import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'
import ts from 'typescript-eslint'

import stylistic from '@stylistic/eslint-plugin'

import jest from 'eslint-plugin-jest'

export default defineConfig([
  globalIgnores(['node_modules', 'dist', 'coverage']),
  js.configs.recommended,
  ts.configs.recommended,
  {
    name: 'stylistic/customized',
    ...stylistic.configs.customize({
      indent: 2,
      quotes: 'single',
      semi: false,
      commaDangle: 'never',
      jsx: true,
      braceStyle: '1tbs',
      arrowParens: true,
      blockSpacing: true, // bracketSpacing: true
      quoteProps: 'consistent',
      jsxQuotes: false, // jsxSingleQuote: false
      jsxBracketSameLine: true, // bracketSameLine: true
      maxLen: 80 // printWidth: 80
    })
  },
  {
    name: 'jest/recommended',
    files: ['**/*.{test,spec}.ts'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    ...jest.configs['flat/recommended']
  },
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022
      }
    },
    rules: {
      // endOfLine: 'lf'
      'linebreak-style': ['error', 'unix'],

      // useTabs: false
      'no-tabs': 'error',

      // singleAttributePerLine: false
      '@stylistic/jsx-max-props-per-line': ['off']
    }
  }
])
