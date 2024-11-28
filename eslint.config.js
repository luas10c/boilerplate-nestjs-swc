import { defineConfig, globalIgnores } from 'eslint/config'

import globals from 'globals'

import js from '@eslint/js'

import ts from 'typescript-eslint'

import prettier from 'eslint-plugin-prettier'

import jest from 'eslint-plugin-jest'

export default defineConfig([
  globalIgnores(['node_modules', 'dist', 'coverage']),
  js.configs.recommended,
  ts.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      prettier
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022
      }
    },
    rules: {
      ...prettier.configs.recommended.rules
    }
  },
  {
    files: ['**/*.{test,spec}.ts'],
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    ...jest.configs['flat/recommended']
  }
])
