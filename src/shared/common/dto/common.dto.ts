import { IsDefined, Validate } from 'class-validator';
import { Transform } from 'class-transformer';
import { IsObjectId, transformToObjectId } from '../../../utils/validator';
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class FindByIdDto {
  @ApiProperty({ type: String })
  @IsDefined()
  @Transform(transformToObjectId)
  @Validate(IsObjectId)
  id: Types.ObjectId;
}
