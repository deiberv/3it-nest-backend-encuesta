import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique:true
  })
  email: string;

  @Column('text', {
    select: false
  })
  password: string;

  @Column('text')
  fullName: string;

  @Column('boolean', { default: true})
  isActive: boolean;

  @Column('text', {default: 'ROLE_USER'})
  roles: string;

  @BeforeInsert()
  validarCampos(){
    this.email = this.email.toLowerCase().trim();
  }
  @BeforeUpdate()
  validarCamposUpdate(){
    this.validarCampos();
  }

}
