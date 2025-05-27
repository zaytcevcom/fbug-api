import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Headers,
} from '@nestjs/common';
import { LogsService } from './logs.service';
import {
  CreateLogDto,
  UpdateLogDto,
  GetLogsQueryDto,
  GetLogStatsQueryDto,
} from './dto';

@Controller()
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post('ingest/:projectId/:key/logs')
  ingest(
    @Param('projectId') projectId: string,
    @Param('key') key: string,
    @Body() dto: CreateLogDto,
  ) {
    return this.logsService.ingest(projectId, key, dto);
  }

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

  @Put('v1/logs/:id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateLogDto,
    @Headers('authorization') auth: string,
  ) {
    return this.logsService.update(id, dto, auth);
  }

  @Delete('v1/logs/:id')
  delete(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.logsService.delete(id, auth);
  }
}
