import { Controller, Get, Param, Query, Headers } from '@nestjs/common';
import { LogGroupsService } from './log-groups.service';
import { GetLogGroupsQueryDto } from './dto';

@Controller('v1/log-groups')
export class LogGroupsController {
  constructor(private readonly logGroupsService: LogGroupsService) {}

  @Get()
  getAll(
    @Query() query: GetLogGroupsQueryDto,
    @Headers('authorization') auth: string,
  ) {
    return this.logGroupsService.getAll(query, auth);
  }

  @Get(':id')
  getById(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.logGroupsService.getById(id, auth);
  }
}
