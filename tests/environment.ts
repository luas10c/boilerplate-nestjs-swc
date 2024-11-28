import NodeEnvironment from 'jest-environment-node'
import type {
  EnvironmentContext,
  JestEnvironmentConfig
} from '@jest/environment'

export default class JestEnvironment extends NodeEnvironment {
  constructor(config: JestEnvironmentConfig, ctx: EnvironmentContext) {
    super(config, ctx)
  }

  async setup(): Promise<void> {
    await super.setup()
    //
  }

  async teardown(): Promise<void> {
    await super.teardown()
    //
  }
}
