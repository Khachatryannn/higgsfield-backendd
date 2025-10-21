import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SERVER_CONFIG } from './configuration/.env_configurations/env.config';
import { initDb } from './database/database.provider';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  await initDb();
  const app = await NestFactory.create(AppModule);
  const PORT: number = SERVER_CONFIG.APP_PORT || 3000;

  app.enableCors({
    origin: 'http://localhost:3002',
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

  const config = new DocumentBuilder()
    .setTitle('My App API')
    .setDescription('API documentation for registration and more')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(PORT ?? 3000);

  console.log(`Server is running at http://localhost:${PORT}`);
}

bootstrap();
