import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estilo } from 'src/estilos/entities/estilo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstiloData {
  public constructor(
    @InjectRepository(Estilo)
    private readonly estiloRepository: Repository<Estilo>,
  ) {}

  async populateDB() {
    //Se elimina toda la data
    await this.estiloRepository.delete({});
    //Se inserta la data
    await this.estiloRepository
      .createQueryBuilder()
      .insert()
      .into(Estilo)
      .values([
        {name: 'Rock'},
        {name: 'Pop'},
        {name: 'Jazz'},
        {name: 'Clasica'},
        {name: 'Salsa'},
        {name: 'Merengue'},
      ]).execute()
  }

}
