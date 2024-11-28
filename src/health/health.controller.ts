import { Controller, Get } from '@nestjs/common'
import { DiskHealthIndicator, HealthCheck, HealthCheckService, MemoryHealthIndicator } from '@nestjs/terminus'

@Controller({
  path: '/health'
})
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly disk: DiskHealthIndicator,
    private readonly memory: MemoryHealthIndicator
  ) {}

  @Get('/')
  @HealthCheck()
  status() {
    return this.health.check([
      () => this.memory.checkHeap('memory_heap', 300 * 1024 * 1024),
      () => this.memory.checkRSS('memory_rss', 512 * 1024 * 1024),
      () =>
        this.disk.checkStorage('disk', {
          path: '/',
          thresholdPercent: 0.9
        })
    ])
  }
}
