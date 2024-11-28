import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module.js'

import { env } from './config/env.js'

const app = await NestFactory.create(AppModule, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true
  }
})

await app.listen(env.PORT, '0.0.0.0')
