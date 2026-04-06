import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SERVER_CONFIG } from './configuration/.env_configurations/env.config';
import { initDb } from './database/database.provider';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  await initDb();
  const app = await NestFactory.create(AppModule);

  const PORT = Number(process.env.PORT) || SERVER_CONFIG.APP_PORT || 3000;

  app.enableCors({
    origin: 'https://higgsfield-gevorggg.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Authorization',
      'X-Api-Key',
      'Content-Type',
      'X-Requested-With',
    ],
    exposedHeaders: ['Set-Cookie', 'Content-Disposition'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(PORT);

  console.log(`Server is running at http://localhost:${PORT}`);
}

bootstrap();
