import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  ArrayNotEmpty,
  IsArray,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
  ValidateNested,
  IsNotEmpty,
  Min,
  Max,
} from 'class-validator';
import { IFilter, IPaginationBodyReq, IPaginationParamReq, ISort } from '../../../interfaces/pagination';

export class PaginationParamDto implements IPaginationParamReq {
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(9999)
  limit!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(9999)
  offset!: number;
}

export class SortDto implements ISort {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(200)
  key!: string;

  @IsNumber()
  @IsIn([-1, 1])
  direction!: number;
}

export class FilterDto implements IFilter {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(200)
  key!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayNotEmpty()
  @Length(0, 50, { each: true })
  @IsNotEmpty({ each: true })
  option!: string[];
}

export class PaginationBodyDto implements IPaginationBodyReq {
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => SortDto)
  sort!: SortDto[];

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => FilterDto)
  filter!: FilterDto[];
}
