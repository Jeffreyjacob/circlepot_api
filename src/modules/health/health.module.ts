import { Get, Module } from '@nestjs/common';
import { HealthController } from './health.controller';


@Module({
  controllers: [HealthController]
})
export class HealthModule {
  @Get()
  check(){
    return {status:"ok",timestamp: new Date().toISOString()}
  }
}
