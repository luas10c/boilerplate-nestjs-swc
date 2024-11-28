import globals from 'globals'

import js from '@eslint/js'

import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

import prettier from 'eslint-plugin-prettier'

import jest from 'eslint-plugin-jest'

/** @type{import('eslint').Linter.Config[]} */
const config = [
  { ignores: ['node_modules', 'dist'] },
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      '@typescript-eslint': ts,
      prettier
    },
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
      },
      globals: {
        ...globals.node,
        ...globals.es2022
      }
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...prettier.configs.recommended.rules
    }
  },
  {
    files: ['**/*.{test,spec}.ts'],
    plugins: {
      jest
    },
    rules: {
      ...jest.configs.recommended.rules
    }
  }
]

export default config
