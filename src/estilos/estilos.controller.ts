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

@Controller('estilos')
export class EstilosController {
  constructor(private readonly estilosService: EstilosService) {}

  @Get()
  findAll() {
    return this.estilosService.findAll();
  }
}
