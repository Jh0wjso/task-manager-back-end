import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const configService = new ConfigService();
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = configService.getAppPort || undefined;

  app.use(helmet());
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );


  const config = new DocumentBuilder()
    .setTitle('Notes')
    .setDescription('Notes implementation')
    .setVersion('1.0')
    .addTag('notes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'Notes API Documentation',
    swaggerOptions: {
      docExpansion: 'none',
      operationsSorter: 'alpha',
      persistAuthorization: false,
      tagsSorter: 'alpha',
    },
  };

  SwaggerModule.setup('api/v1/doc', app, document, customOptions);
  await app.listen(port);

  console.log(`Application is running on ${await app.getUrl()}`);
  console.log(`API docs on ${await app.getUrl()}/api/v1/doc`);
}

bootstrap();
