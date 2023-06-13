import { Encuesta } from 'src/encuestas/entities/encuesta.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Estilo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true })
  name: string;

  @OneToMany(() => Encuesta, (encuesta) => encuesta.estilo)
  encuentas?: Encuesta[];
}
