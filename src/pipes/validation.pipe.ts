import { ArgumentMetadata, Injectable, ValidationPipe } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  async transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'query') {
      // const metatype = this.toValidate(metadata) ? metadata.metatype : undefined;
      return super.transform(value, {
        ...metadata,
        metatype: undefined,
      });
    }
    return super.transform(value, metadata);
  }
}
