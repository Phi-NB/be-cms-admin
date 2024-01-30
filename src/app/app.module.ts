import { Module } from '@nestjs/common';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { KeycloakService } from '../modules/keycloak/keycloak.service';
import { KeycloakModule } from '../modules/keycloak/keycloak.module';
import { databaseConfigs } from '../configs/database';
import { routeConfigs } from '../configs/rote';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 5,
        limit: 20,
      },
    ]),
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakService,
      imports: [KeycloakModule],
    }),
    databaseConfigs(),
    ...routeConfigs,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
