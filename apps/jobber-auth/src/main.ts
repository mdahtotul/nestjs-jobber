/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = app.get(ConfigService).getOrThrow<number>('AUTH_PORT');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(port);
  Logger.log(
    `🚨 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
