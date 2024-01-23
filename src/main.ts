import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder();
  config.setTitle('API');
  config.setDescription('API description');
  config.setVersion('1.0');
  config.addTag('API');
  const document = SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
