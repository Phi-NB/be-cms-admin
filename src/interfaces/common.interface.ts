import { IMeta } from './paging.interface';

export interface IDefaultResponse {
  statusCode: number;
  message: string;
  data?: any;
  errors?: any;
}

export interface ISuccessResponse<T> {
  message: string;
  data: T;
  meta?: IMeta;
}

export interface IErrorResponse {
  message: string;
  error: any;
}

export type IObjectString = { [key: string]: string };
export type IObjectNumber = { [key: string]: number };

export interface IKeyValueString {
  key: string;
  value: string;
}

export interface IKeyValueArrObject {
  key: string;
  value: IObjectString[];
}

export interface IKeyValueObject {
  key: string;
  value: IObjectString;
}
