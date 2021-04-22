import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class Principal extends DatabaseService {
  GravarTemperatura(data: any) {this.temperature = data.teste;}

  PegarTemperatura(): string{return this.temperature;}
}
