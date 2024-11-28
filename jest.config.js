const config = {
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
    '#/(.+)': ['<rootDir>/src/$1']
  }
}

/** @type{import('jest').Config} */
export default {
  projects: [
    {
      displayName: 'unit',
      testMatch: ['<rootDir>/tests/unit/**/*.spec.ts'],
      setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
      ...config
    },
    {
      displayName: 'integration',
      testMatch: ['<rootDir>/tests/integration/**/*.spec.ts'],
      testEnvironment: '<rootDir>/tests/environment.ts',
      ...config
    }
  ]
}
