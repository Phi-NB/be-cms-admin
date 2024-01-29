import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DefaultResponseDto, GenericResponseDto } from '../shared/common/dto/generic-response.dto';
import { MESSAGE_CODE } from '../constants/message';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, DefaultResponseDto<T>> {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<GenericResponseDto<T>> {
    return next.handle().pipe(
      map((data) => {
        return {
          statusCode: context.switchToHttp().getResponse().statusCode,
          message: data?.message || MESSAGE_CODE.DEFAULT_SUCCESS,
          data: data?.data,
          ...(data?.meta && { meta: data?.meta }),
        } as GenericResponseDto<T>;
      }),
    );
  }
}
