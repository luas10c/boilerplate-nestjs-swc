import { defineConfig } from 'jest'

export default defineConfig({
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          baseUrl: './',
          parser: {
            syntax: 'typescript',
            decorators: true
          },
          target: 'es2022',
          keepClassNames: true,
          transform: {
            decoratorMetadata: true,
            legacyDecorator: true
          },
          paths: {
            '#/*': ['./src/*']
          }
        },
        module: {
          type: 'es6',
          strict: true,
          importInterop: 'swc'
        }
      }
    ]
  },
  moduleNameMapper: {
    '^#/(.+)$': ['<rootDir>/src/$1']
  }
})
