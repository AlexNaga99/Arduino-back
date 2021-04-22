import { Module } from '@nestjs/common';
import { EndPoint } from './EndPoint.controller';
import { Principal } from './ServicoPrincipal.service';

@Module({
  imports: [],
  controllers: [EndPoint],
  providers: [Principal],
})
export class AppModule {}
