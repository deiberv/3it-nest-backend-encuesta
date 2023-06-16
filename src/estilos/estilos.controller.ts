import {Controller,Get} from '@nestjs/common';
import { EstilosService } from './estilos.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Estilo } from './entities/estilo.entity';

@ApiTags('Estilos')
@Controller('estilos')
export class EstilosController {
  constructor(private readonly estilosService: EstilosService) {}
  //-----------------------------------------------------------------
  //----- Metodos Publicos ------------------------------------------
  //-----------------------------------------------------------------
  @Get()
  @ApiOperation({description: "Obtiene el listado de estilos musicales"})
  @ApiResponse({ status: 200, description: "Listado de etilos musicales", type: [Estilo] })
  findAll() {
    return this.estilosService.findAll();
  }
}
