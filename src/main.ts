import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // configuração do modulo

  process.env.TZ = '-03:00'; // configuração do timezone
  app.useGlobalPipes(new ValidationPipe()); //configuração da validacao
  app.enableCors(); // configuração de cors para acesso externo

  await app.listen(process.env.PORT ?? 4000); // Deixar em 4000 para não ter conflito com react
}
bootstrap();
