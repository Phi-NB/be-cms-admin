import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { envConfigs } from './configs/env';
import { ClassSerializerInterceptor, VersioningType } from '@nestjs/common';
import { corsConfigs } from './configs/cors';
import helmet from 'helmet';
import { CustomValidationPipe } from './pipes/validation.pipe';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfigs } from './configs/swagger';

async function bootstrap() {
  envConfigs();

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.use(helmet());
  app.enableCors(corsConfigs);

  app.useGlobalPipes(
    new CustomValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  // app.useGlobalFilters(new HttpExceptionFilter());

  const document = SwaggerModule.createDocument(app, swaggerConfigs);
  SwaggerModule.setup('swagger.html', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
