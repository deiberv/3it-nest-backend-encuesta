import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Estilo } from "./entities/estilo.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class EstilosService {
  private readonly logger = new Logger('EstilosService');
  public constructor(
    @InjectRepository(Estilo)
    private readonly estiloRepository: Repository<Estilo>,
  ) {}

  //-----------------------------------------------------------------
  //----- Metodos Publicos ------------------------------------------
  //-----------------------------------------------------------------
  async findAll() {
    return this.estiloRepository.find({});
  }

  async findOne( id: string ) {
    const estilo = await this.estiloRepository.findOneBy({ id });

    if ( !estilo )
      throw new NotFoundException(`No existe el estilo con el id ${id} indicado. `);

    return estilo;
  }

  async findAllWithEncuesta() {
    const estilosConEncuestas = await this.estiloRepository.createQueryBuilder("estilo")
      .leftJoinAndSelect("estilo.encuentas", "encuesta")
      .loadRelationCountAndMap("estilo.totalEncuesta", "estilo.encuentas")
      .getMany();
 
    return estilosConEncuestas;
  }
}
