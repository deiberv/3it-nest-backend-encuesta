import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/auth/entities/user.entity';
import { ValidRoles } from 'src/auth/interfaces';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosData {

  public constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async populateDB() {
    //Se elimina toda la data
    await this.userRepository.delete({});
    //Se inserta la data
    await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {email: 'test1@google.com', fullName: 'Test One', password: await this.getPasswordHash('Abc123'), roles: ValidRoles.ADMIN},
        {email: 'test2@google.com', fullName: 'Test Two', password: await this.getPasswordHash('Abc123'), roles: ValidRoles.USER},
      ]).execute()
  }

  private getPasswordHash(password: string) {
    return bcrypt.hash(password,10);
  }
}