import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncuestasService } from './encuestas.service';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags, ApiOkResponse, ApiInternalServerErrorResponse, ApiResponse } from '@nestjs/swagger';

@ApiTags('Encuestas')
@Controller('encuestas')
export class EncuestasController {
  constructor(private readonly encuestasService: EncuestasService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Encuesta creada' })
  @ApiBadRequestResponse({ description: 'Error en el request'})
  create(@Body() createEncuestaDto: CreateEncuestaDto) {
    return this.encuestasService.create(createEncuestaDto);
  }

  @Get('/resultado')
  @ApiOkResponse({ description: 'Resultado de la encuesta' })
  @ApiResponse({ status: 404, description: 'Estilo no exise' })
  @ApiInternalServerErrorResponse({ description: 'Error interno' })
  obtenerResultados(){
    return this.encuestasService.obtenerResultados();
  }
}
