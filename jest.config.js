/** @type{import('jest').Config} */
const config = {
  verbose: true,
  coverageProvider: 'v8',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '#/(.+)': ['<rootDir>/src/$1']
  },
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
          loose: false,
          transform: {
            decoratorMetadata: true,
            legacyDecorator: true
          },
          paths: {
            '#/*': ['./src/*']
          }
        },
        sourceMaps: true,
        inlineSourcesContent: true,
        module: {
          type: 'es6',
          strict: true,
          noInterop: true,
          resolveFully: false
        }
      }
    ]
  },
  testEnvironment: '<rootDir>/tests/environment.ts'
}

export default config
