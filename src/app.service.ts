import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Injectable()
export class app extends DatabaseService {
  recordTemp(data: any) {
    this.temperature = data.Temperature;
  }

  getTemp(): string{
    return this.temperature;
  }
}
