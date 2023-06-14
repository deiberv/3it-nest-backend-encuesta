import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Encuesta } from './entities/encuesta.entity';
import { EstilosService } from 'src/estilos/estilos.service';
import { ResultadoEncuestaDto } from './dto/resultado-encuesta.dto';

@Injectable()
export class EncuestasService {
  private readonly logger = new Logger('EncuestasService');
  public constructor(
    @InjectRepository(Encuesta)
    private readonly encuestaRepository: Repository<Encuesta>,
    private readonly estiloService: EstilosService
  ) {}
  
  //-----------------------------------------------------------------
  //----- Metodos Publicos ------------------------------------------
  //-----------------------------------------------------------------
  async create(createEncuestaDto: CreateEncuestaDto) {

    const { estilo, ...createEncuestaProp } = createEncuestaDto;
    //Se verifica si el estilo que se desea marcar existe
    const estilodb = await this.estiloService.findOne( estilo );

    try {
      //Se crea la encuenta
      const encuesta = this.encuestaRepository.create({
        ...createEncuestaProp,
        estilo: estilodb
      });

      //Se registra en la base de datos
      await this.encuestaRepository.save(encuesta);
      
      return encuesta;

    } catch (error) {
      this.logger.error(`Error registrando la encuenta ${error}`);
      this.handleException(error);
    }
  }

  async obtenerResultados() {

    return (await this.estiloService.findAllWithEncuesta()).map( resultado => {
      return new ResultadoEncuestaDto( resultado.id, resultado.name, resultado.encuentas?.length);
    } );
  }
  
  //-----------------------------------------------------------------
  //----- Metodos privados ------------------------------------------
  //-----------------------------------------------------------------
  private handleException(error) {
    console.log(error);

    if ( error?.errno === 19) {
      throw new BadRequestException(`Ya existe registro de email y estilo de musica en la encuentas`);
    }
      

    throw new InternalServerErrorException(`Error inesperado en el servidor.`);
  }
}
