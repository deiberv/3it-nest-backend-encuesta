import { Module } from '@nestjs/common';
import { EstilosService } from './estilos.service';
import { EstilosController } from './estilos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estilo } from './entities/estilo.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [EstilosController],
  providers: [EstilosService],
  exports: [EstilosService],
  imports: [
    TypeOrmModule.forFeature([ Estilo ]),
    AuthModule
  ]
})
export class EstilosModule {}
