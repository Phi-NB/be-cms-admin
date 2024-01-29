import { Body, Controller, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaginationParamDto } from 'src/shared/dto/pagination.dto';

@ApiTags('submission-controller')
@Controller('configs')
export class ConfigsController {
  @Post()
  @UsePipes(ValidationPipe())
  async list(@Query() query: PaginationParamDto, @Body() body: GetListDeckBodyDto) {
    return this.service.list(query, body);
  }
}
