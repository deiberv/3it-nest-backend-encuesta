import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EstilosService } from './estilos.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Estilos')
@Controller('estilos')
export class EstilosController {
  constructor(private readonly estilosService: EstilosService) {}

  @Get()
  @ApiResponse({ status: 201, description: "Listado de etilos musicales" })
  findAll() {
    return this.estilosService.findAll();
  }
}
