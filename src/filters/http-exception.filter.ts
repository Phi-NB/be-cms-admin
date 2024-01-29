import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces';
import { Response } from 'express';
import { IDefaultResponse } from '../interfaces/common.interface';
import { isCorrectFormatResponseMessage } from '../utils/response';
import { MESSAGE_CODE } from '../constants/message';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const res: Response = ctx.getResponse<Response>();
    const statusCode: HttpStatus = exception.getStatus();
    const exceptionRes: any = exception.getResponse();

    res.status(statusCode).json({
      statusCode,
      message: isCorrectFormatResponseMessage(exceptionRes.error) ? exceptionRes.error : MESSAGE_CODE.DEFAULT_ERROR,
      data: null,
      ...(process.env.PUB_ENVIRONMENT === 'dev' && { errors: exceptionRes.message }),
    } as IDefaultResponse);
  }
}
