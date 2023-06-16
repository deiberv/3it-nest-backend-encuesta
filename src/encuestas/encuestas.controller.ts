import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncuestasService } from './encuestas.service';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags, ApiOkResponse, ApiInternalServerErrorResponse, ApiResponse, ApiBody, ApiOperation, ApiUnauthorizedResponse, ApiForbiddenResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Encuesta } from './entities/encuesta.entity';
import { ResultadoEncuestaDto } from './dto/resultado-encuesta.dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@ApiTags('Encuestas')
@Controller('encuestas')
export class EncuestasController {
  constructor(private readonly encuestasService: EncuestasService) {}
  //-----------------------------------------------------------------
  //----- Metodos Publicos ------------------------------------------
  //-----------------------------------------------------------------
  @Post()
  @ApiOperation({description: "Realiza el llenado de la encuenta."})
  @ApiBody({ type: [CreateEncuestaDto] })
  @ApiCreatedResponse({ description: 'Encuesta creada', type: Encuesta })
  @ApiBadRequestResponse({ description: 'Error en el request'})
  @ApiUnauthorizedResponse({ description: "Unauthorized" })
  @ApiForbiddenResponse({ description: "Forbidden" })
  @ApiBearerAuth()
  @Auth(ValidRoles.ADMIN, ValidRoles.USER)
  create(@Body() createEncuestaDto: CreateEncuestaDto) {
    return this.encuestasService.create(createEncuestaDto);
  }

  @Get()
  @ApiOperation({
    description: "Obtiene el resultado de las votaciones.", 
    summary: "Para ejecutar esta accion es necesario iniciar session con un usuario de role ROLE_ADMIN"
  })
  @ApiOkResponse({ description: 'Obtiene lista de encuestas', type: [ResultadoEncuestaDto] })
  @ApiInternalServerErrorResponse({ description: 'Error interno' })
  @ApiUnauthorizedResponse({description: "Unauthorized" })
  @ApiForbiddenResponse({description: "Forbidden" })
  @ApiBearerAuth()
  @Auth(ValidRoles.ADMIN)
  obtenerResultados(){
    return this.encuestasService.obtenerResultados();
  }
}
