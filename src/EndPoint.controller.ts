import { Controller, Get, Post, Body } from '@nestjs/common';
import { Principal } from './ServicoPrincipal.service';

@Controller()
export class EndPoint {
  constructor(private readonly appService: Principal) { }

  @Post()
  Record(@Body() data: any) {
    console.log(data);
    this.appService.GravarTemperatura(data);
  }

  @Get('get')
  getById(): string { return this.appService.PegarTemperatura(); }

}
