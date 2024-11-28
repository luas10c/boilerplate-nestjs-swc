/** @type{import('jest').Config} */
const config = {
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testEnvironment: '<rootDir>/tests/environment.ts',
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
        module: {
          type: 'es6',
          strict: true,
          importInterop: 'swc'
        }
      }
    ]
  }
}

export default config
