import { ApiProperty } from '@nestjs/swagger';
import { Encuesta } from 'src/encuestas/entities/encuesta.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Estilo {
  @ApiProperty({
    description: 'Identificador del estilo',
    example: 'dabafe7d-724b-431a-a0e5-aceb8027df77'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Nombre del Estilo',
    example: 'Salsa'
  })
  @Column('text', { unique: true })
  name: string;

  @OneToMany(() => Encuesta, (encuesta) => encuesta.estilo)
  encuentas?: Encuesta[];
}
