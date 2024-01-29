import { Injectable } from '@nestjs/common';
import { KeycloakConnectOptions, KeycloakConnectOptionsFactory } from 'nest-keycloak-connect';

@Injectable()
export class KeycloakService implements KeycloakConnectOptionsFactory {
  createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
      authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL,
      realm: process.env.KEYCLOAK_REALM,
      clientId: process.env.KEYCLOAK_ID,
      secret: process.env.KEYCLOAK_SECRET,
    };
  }
}
