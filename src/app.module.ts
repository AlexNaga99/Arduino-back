import { Module } from '@nestjs/common';
import { controller } from './app.controller';
import { app } from './app.service';

@Module({
  imports: [],
  controllers: [controller],
  providers: [app],
})
export class AppModule {}
