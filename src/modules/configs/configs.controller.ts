import { Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('submission-controller')
@Controller('configs')
export class ConfigsController {
  @Post()
  @UsePipes(ValidationPipe())
  async list(@Query() query: PaginationParamDto, @Body() body: GetListDeckBodyDto) {
    return this.service.list(query, body);
  }
}
