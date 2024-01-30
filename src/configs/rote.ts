import { RouterModule } from '@nestjs/core';
import { ConfigsModule } from '../modules/configs/configs.module';

export const routeConfigs = [ConfigsModule, RouterModule.register([{ path: 'config', module: ConfigsModule }])];
