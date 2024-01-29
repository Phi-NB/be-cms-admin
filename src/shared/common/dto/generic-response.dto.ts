import { IMeta } from '../../../interfaces/paging.interface';

export class DefaultResponseDto<T> {
  message: string;
  data: T;
  meta: IMeta;

  constructor({ message, data, meta }: { message: string; data: T; meta?: IMeta }) {
    this.message = message;
    this.data = data;
    this.meta = meta;
  }
}

export class GenericResponseDto<T> {
  statusCode?: number;
  message: string;
  data: T;
  meta: IMeta;

  constructor({ statusCode, message, data, meta }: { statusCode?: number; message: string; data: T; meta?: IMeta }) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.meta = meta;
  }
}
