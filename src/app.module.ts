import { Module } from '@nestjs/common'
import { ThrottlerModule } from '@nestjs/throttler'

import { HealthModule } from './health/health.module'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000,
        limit: 3
      },
      {
        name: 'medium',
        ttl: 10000,
        limit: 20
      },
      {
        name: 'long',
        ttl: 60000,
        limit: 100
      }
    ]),
    HealthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
