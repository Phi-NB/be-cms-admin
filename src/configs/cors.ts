import { CorsOptions, CorsOptionsDelegate } from '@nestjs/common/interfaces/external/cors-options.interface';

const acceptedMethods = ['GET', 'POST', 'PUT', 'HEAD', 'OPTIONS', 'DELETE'];

export const corsConfigs: CorsOptions | CorsOptionsDelegate<any> = {
  origin: '*',
  methods: acceptedMethods,
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
