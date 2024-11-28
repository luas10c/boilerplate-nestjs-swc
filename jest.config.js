/** @type{import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          baseUrl: '.',
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
          noInterop: true
        }
      }
    ]
  }
}

export default config
