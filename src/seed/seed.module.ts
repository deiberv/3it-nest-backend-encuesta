import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { EstiloData } from './data/EstiloData';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estilo } from 'src/estilos/entities/estilo.entity';

@Module({
  controllers: [SeedController],
  providers: [SeedService, EstiloData],
  imports: [ 
    TypeOrmModule.forFeature([ Estilo ])
  ]
})
export class SeedModule {}
