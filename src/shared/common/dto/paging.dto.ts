import { IsOptional, Max, Min } from 'class-validator';
import { IPaging } from '../../../interfaces/paging.interface';
import { ApiProperty } from '@nestjs/swagger';

export class PagingQueryDto implements IPaging {
  @ApiProperty({ required: false })
  @IsOptional()
  @Min(0)
  @Max(99999)
  limit: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @Min(0)
  @Max(99999)
  offset: number;
}
