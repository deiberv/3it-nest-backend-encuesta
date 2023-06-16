import { Injectable } from '@nestjs/common';
import { EstiloData } from './data/EstiloData';
import { UsuariosData } from './data/UsuariosData';

@Injectable()
export class SeedService {

  constructor(
    private readonly estilosData: EstiloData,
    private readonly usuariosData: UsuariosData
  ) {}

  //-----------------------------------------------------------------
  //----- Metodos Publicos ------------------------------------------
  //-----------------------------------------------------------------
  populateDB() {
    this.estilosData.populateDB();
    this.usuariosData.populateDB();
    return `Seed ejecutado...`;
  }
}
