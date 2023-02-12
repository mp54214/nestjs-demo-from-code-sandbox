import { Controller, Get } from '@nestjs/common';
import { env } from 'process';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('data2')
  getData(): any {
    return [{ a: 200, b: 500, c: 'Matti' }];
  }
}
