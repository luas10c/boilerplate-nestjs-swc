import { describe, beforeEach, afterAll, it, expect } from '@jest/globals'
import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'

import { AppModule } from '#/app.module'
import { AppService } from '#/app.service'

describe('AppController', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule]
    })
      .overrideProvider(AppService)
      .useClass(AppService)
      .compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  it(`GET /`, async () => {
    const response = await request(app.getHttpServer())
      .get('/')
      .send()

    expect(response.body).toEqual(expect.objectContaining({
      statusCode: 200,
      message: 'Welcome, John!'
    }))
  })
})
