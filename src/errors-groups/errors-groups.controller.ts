import { Controller, Get, Param, Query, Headers } from '@nestjs/common';
import { ErrorsGroupsService } from './errors-groups.service';
import { GetErrorGroupsQueryDto } from './dto';

@Controller('v1/error-groups')
export class ErrorsGroupsController {
  constructor(private readonly errorsGroupsService: ErrorsGroupsService) {}

  @Get()
  getAll(
    @Query() query: GetErrorGroupsQueryDto,
    @Headers('authorization') auth: string,
  ) {
    return this.errorsGroupsService.getAll(query, auth);
  }

  @Get(':id')
  getById(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.errorsGroupsService.getById(id, auth);
  }
}
