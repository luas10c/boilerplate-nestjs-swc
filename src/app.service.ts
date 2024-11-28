import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  async sayHello(): Promise<{ statusCode: number, message: string }> {
    return { statusCode: 200, message: 'Welcome, John!' }
  }
}
