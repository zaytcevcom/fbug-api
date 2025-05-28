import { Controller, Get, Param, Query, Headers } from '@nestjs/common';
import { LogsService } from './logs.service';
import { GetLogsQueryDto, GetLogStatsQueryDto } from './dto';

@Controller()
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get('v1/logs')
  getAll(
    @Query() query: GetLogsQueryDto,
    @Headers('authorization') auth: string,
  ) {
    return this.logsService.getAll(query, auth);
  }

  @Get('v1/logs/stats')
  getStats(
    @Query() query: GetLogStatsQueryDto,
    @Headers('authorization') auth: string,
  ) {
    return this.logsService.getStats(query, auth);
  }

  @Get('v1/logs/:id')
  getById(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.logsService.getById(id, auth);
  }
}
