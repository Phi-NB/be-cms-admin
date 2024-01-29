import * as dotenv from 'dotenv';
import { isUndefined } from 'lodash';

dotenv.config();

export const envConfigs = () => {
  // database
  if (isUndefined(process.env.DB_URI)) {
    throw new Error('DB_URI is required.');
  }
  // keycloak
  // if (isUndefined(process.env.KEYCLOAK_AUTH_SERVER_URL)) {
  //   throw new Error('KEYCLOAK_AUTH_SERVER_URL is required.');
  // }
  // if (isUndefined(process.env.KEYCLOAK_REALM)) {
  //   throw new Error('KEYCLOAK_REALM is required.');
  // }
  // if (isUndefined(process.env.KEYCLOAK_ID)) {
  //   throw new Error('KEYCLOAK_ID is required.');
  // }
  // if (isUndefined(process.env.KEYCLOAK_SECRET)) {
  //   throw new Error('KEYCLOAK_SECRET is required.');
  // }
  // // other
  // if (isUndefined(process.env.PUB_ENVIRONMENT)) {
  //   throw new Error('PUB_ENVIRONMENT is required.');
  // }
  // // service
  // if (isUndefined(process.env.API_URL_SAAS)) {
  //   throw new Error('API_URL_SAAS is required.');
  // }
  // if (isUndefined(process.env.URL_GAME)) {
  //   throw new Error('URL_GAME is required.');
  // }
  // // aws
  // if (isUndefined(process.env.AWS_REGION)) {
  //   throw new Error('AWS_REGION is required.');
  // }
  // if (isUndefined(process.env.AWS_ACCESS_KEY)) {
  //   throw new Error('AWS_ACCESS_KEY is required.');
  // }
  // if (isUndefined(process.env.AWS_SECRET_ACCESS_KEY)) {
  //   throw new Error('AWS_SECRET_ACCESS_KEY is required.');
  // }
  // if (isUndefined(process.env.AWS_BUCKET_NAME)) {
  //   throw new Error('AWS_BUCKET_NAME is required.');
  // }
  // if (isUndefined(process.env.AWS_BUCKET_PREFIX)) {
  //   throw new Error('AWS_BUCKET_PREFIX is required.');
  // }
  // if (isUndefined(process.env.AWS_BUCKET_ASSETS_PREFIX)) {
  //   throw new Error('AWS_BUCKET_ASSETS_PREFIX is required.');
  // }
};
