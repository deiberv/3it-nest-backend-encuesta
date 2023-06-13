import { Estilo } from "src/estilos/entities/estilo.entity";
import { BeforeInsert, Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@Index(['email', 'estilo'], { unique: true })
export class Encuesta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  email: string;

  @Column('bigint', { name:'create_at' })
  createAt: number;

  @ManyToOne(() => Estilo, (estilo) => estilo.encuentas)
  estilo: Estilo;

  @BeforeInsert()
  createdAt() {
    this.createAt = new Date().getTime();
  }
}
