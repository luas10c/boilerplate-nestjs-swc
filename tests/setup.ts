import { beforeAll, beforeEach, afterAll } from '@jest/globals'

import { server } from './msw'

beforeAll(() => {
  server.listen()
})

beforeEach(() => {
  server.restoreHandlers()
})

afterAll(() => {
  server.close()
})
