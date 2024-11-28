import NodeEnvironment from 'jest-environment-node'
import { config } from 'dotenv'
import { join } from 'node:path'
import type {
  JestEnvironmentConfig,
  EnvironmentContext
} from '@jest/environment'

config({
  path: join(import.meta.dirname, '..', '.env.local'),
  quiet: true
})

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
