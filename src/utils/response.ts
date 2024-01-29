import { IErrorResponse, ISuccessResponse } from '../interfaces/common.interface';
import { newError } from './error';
import { isArray, omit, replace, snakeCase, upperCase } from 'lodash';
import { camelize } from './case';
import { DefaultResponseDto } from '../shared/common/dto/generic-response.dto';
import { MetaEntity } from '../shared/common/entity/meta.entity';

export const successResponse = <T>({ data, message, meta }: ISuccessResponse<any>, Entity?: new (args: any) => T) => {
  const formatData = isArray(data)
    ? data.map((item) => camelizeDataWithEntity(item, Entity))
    : camelizeDataWithEntity(data, Entity);
  return new DefaultResponseDto({
    message,
    data: formatData,
    ...(meta && { meta: new MetaEntity(meta) }),
  });
};

export const errorResponse = ({ error, message }: IErrorResponse): never => {
  process.env.PUB_ENVIRONMENT === 'dev' && console.log('================', error);
  const statusCode = error?.status || error?.response?.status || error?.statusCode;
  const errorMessage = error?.response?.error || error?.message || message;
  return newError(statusCode, errorMessage, error);
};

export const formatCaseResponseMessage = (message: string) => {
  return replace(upperCase(snakeCase(message)), / /g, '_');
};

export const isCorrectFormatResponseMessage = (message: string) => {
  return /^[A-Z]+(_[A-Z]+)*$/.test(message);
};

export const camelizeData = (data: any) => {
  return camelize(omit(JSON.parse(JSON.stringify(data)), ['version']));
};

export const camelizeDataWithEntity = (data: any, Entity?: any) => {
  return Entity ? new Entity(camelizeData(data)) : camelizeData(data);
};
