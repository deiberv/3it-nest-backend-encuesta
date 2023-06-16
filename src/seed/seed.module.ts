import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { EstiloData } from './data/EstiloData';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estilo } from 'src/estilos/entities/estilo.entity';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/auth/entities/user.entity';
import { UsuariosData } from './data/UsuariosData';

@Module({
  controllers: [SeedController],
  providers: [SeedService, EstiloData, UsuariosData],
  imports: [ 
    TypeOrmModule.forFeature([ Estilo, User ]),
    AuthModule
  ]
})
export class SeedModule {}
