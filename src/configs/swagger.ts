import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfigs = new DocumentBuilder()
  .setTitle('CMS SAX API')
  .setDescription('')
  .setVersion('1.0')
  .addTag('')
  .addBearerAuth()
  .build();
