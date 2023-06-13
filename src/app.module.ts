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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    EstilosModule,
    SeedModule,
    EncuestasModule,
  ],
})
export class AppModule {}
