import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'

import ts from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

import prettier from 'eslint-plugin-prettier'

import unicorn from 'eslint-plugin-unicorn'
import n from 'eslint-plugin-n'

import jest from 'eslint-plugin-jest'

export default defineConfig([
  globalIgnores(['node_modules', 'dist', 'build', 'coverage']),
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      '@typescript-eslint': ts,
      unicorn,
      n,
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
      ...unicorn.configs.recommended.rules,
      ...n.configs['flat/recommended'].rules,
      ...prettier.configs.recommended.rules,
      'n/exports-style': ['error', 'module.exports']
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
])
