import { ApiProperty } from "@nestjs/swagger";
import { Estilo } from "src/estilos/entities/estilo.entity";
import { BeforeInsert, Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@Index(['email', 'estilo'], { unique: true })
export class Encuesta {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column('text')
  email: string;

  @ApiProperty()
  @Column('bigint', { name:'create_at' })
  createAt: number;

  @ApiProperty({
    description: 'Estilo musical',
    type: () => Estilo
  })
  @ManyToOne(() => Estilo, (estilo) => estilo.encuentas)
  estilo: Estilo;

  @BeforeInsert()
  createdAt() {
    this.createAt = new Date().getTime();
  }
}
