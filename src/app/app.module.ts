import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { KeycloakConnectModule } from 'nest-keycloak-connect';
import { KeycloakService } from 'src/modules/keycloak/keycloak.service';
import { KeycloakModule } from 'src/modules/keycloak/keycloak.module';
import { databaseConfigs } from 'src/configs/database';
import { routeConfigs } from 'src/configs/rote';
import { APP_GUARD } from '@nestjs/core';

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
