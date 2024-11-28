import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

import { env } from './config/env'

const app = await NestFactory.create(AppModule, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']
  }
})

await app.listen(env.PORT, '0.0.0.0')
