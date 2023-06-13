import { Injectable } from '@nestjs/common';
import { EstiloData } from './data/EstiloData';

@Injectable()
export class SeedService {

  constructor(
    private readonly estilosData: EstiloData
  ) {}

  populateDB() {
    this.estilosData.populateDB();
    return `Seed ejecutado...`;
  }
}
