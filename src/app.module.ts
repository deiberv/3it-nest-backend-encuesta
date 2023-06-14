import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstilosModule } from './estilos/estilos.module';
import { SeedModule } from './seed/seed.module';
import { EncuestasModule } from './encuestas/encuestas.module';

@Module({
  imports: [
    //Carga la configuracion de .env
    ConfigModule.forRoot(),
    //Configuracion de typeOrm
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      logging: false,
    }),
    EstilosModule,
    SeedModule,
    EncuestasModule,
  ],
})
export class AppModule {}
