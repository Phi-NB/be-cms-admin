import { HttpException, HttpStatus } from '@nestjs/common';

export const newError = (statusCode = HttpStatus.BAD_REQUEST, message: string, error?: any, data?: any) => {
  let options = {};
  const errorMessage = error?.message;
  if (error instanceof Error) {
    options = { ...options, cause: error };
  }
  throw new HttpException({ error: message, data, message: errorMessage }, statusCode, options);
};
