import {Controller,Get} from '@nestjs/common';
import { EstilosService } from './estilos.service';
import { ApiBearerAuth, ApiForbiddenResponse, ApiOperation, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Estilo } from './entities/estilo.entity';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@ApiTags('Estilos')
@Controller('estilos')
export class EstilosController {
  constructor(private readonly estilosService: EstilosService) {}
  //-----------------------------------------------------------------
  //----- Metodos Publicos ------------------------------------------
  //-----------------------------------------------------------------
  @Get()
  @Auth()
  @ApiBearerAuth()
  @ApiOperation({description: "Obtiene el listado de estilos musicales"})
  @ApiResponse({ status: 200, description: "Listado de etilos musicales", type: [Estilo] })
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiForbiddenResponse({ description: "Forbidden" })
  findAll() {
    return this.estilosService.findAll();
  }
}
