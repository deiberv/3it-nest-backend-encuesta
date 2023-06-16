import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors({
    origin: ['http://localhost:4200'],
    methods: ['POST', 'PUT', 'DELETE', 'GET']
  })

  //Dcoumentacion de Swagger
  const config = new DocumentBuilder()
    .setTitle('Encuestas RESTFul API')
    .setDescription('Api sistema de encuentas, prueba tecnica 3it')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config)  ;
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`App ejecutandose sobre el puerto ${port}`);
}
bootstrap();
