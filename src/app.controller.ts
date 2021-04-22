import { Controller, Get, Post, Body } from '@nestjs/common';
import { app } from './app.service';

@Controller()
export class controller {
  constructor(private readonly appService: app) {}

  @Post()
  Record(@Body() data: any) {
    this.appService.recordTemp(data);
  }

  @Get('get')
  getById(): string{
    return this.appService.getTemp();
  }
  
}
