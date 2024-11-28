import { NestFactory } from '@nestjs/core'
import { apiReference } from '@scalar/nestjs-api-reference'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

import { env } from './common/env'

const app = await NestFactory.create(AppModule, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true
  }
})

const config = new DocumentBuilder()
  .setTitle('Boilerplate Nest.js SWC')
  .setDescription('No description')
  .setVersion('0.0.1')
  .setOpenAPIVersion('3.1.1')
  .build()

const document = SwaggerModule.createDocument(app, config)

app.use(
  '/docs',
  apiReference({
    theme: 'purple',
    content: document
  })
)

await app.listen(env.PORT, '0.0.0.0')
