
import { Module } from '@nestjs/common';
import { EncuestasService } from './encuestas.service';
import { EncuestasController } from './encuestas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encuesta } from './entities/encuesta.entity';
import { EstilosModule } from 'src/estilos/estilos.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [EncuestasController],
  providers: [EncuestasService],
  imports: [
    TypeOrmModule.forFeature([ Encuesta ]),
    EstilosModule,
    AuthModule
  ]
})
export class EncuestasModule {}
