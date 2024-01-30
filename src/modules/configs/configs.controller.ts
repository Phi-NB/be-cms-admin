import { Body, Controller, Get, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaginationParamDto } from '../../shared/dto/pagination.dto';
import { ConfigsService } from './configs.service';

@ApiTags('config-controller')
@Controller('')
export class ConfigsController {
  constructor(private readonly service: ConfigsService) {}
  // @Post('')
  // @UsePipes(new ValidationPipe())
  // async list(@Query() query: PaginationParamDto, @Body() body: any) {
  //   return this.service.getListConfig(query, body);
  // }

  @Put('')
  @UsePipes(new ValidationPipe())
  async update(@Body() body: any) {
    console.log(body);
  }
}
