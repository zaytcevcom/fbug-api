import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Headers,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ErrorsService } from './errors.service';
import {
  UpdateErrorDto,
  GetErrorsQueryDto,
  GetErrorStatsQueryDto,
  CreateErrorDto,
} from './dto';

@Controller()
export class ErrorsController {
  constructor(private readonly errorsService: ErrorsService) {}

  @Post('ingest/:projectId/:key/errors')
  ingest(
    @Param('projectId') projectId: string,
    @Param('key') key: string,
    @Body() dto: CreateErrorDto,
  ) {
    return this.errorsService.ingest(projectId, key, dto);
  }

  @Get('v1/errors')
  getAll(
    @Query() query: GetErrorsQueryDto,
    @Headers('authorization') auth: string,
  ) {
    return this.errorsService.getAll(query, auth);
  }

  @Get('v1/errors/stats')
  getStats(
    @Query() query: GetErrorStatsQueryDto,
    @Headers('authorization') auth: string,
  ) {
    return this.errorsService.getStats(query, auth);
  }

  @Get('v1/errors/:id')
  getOne(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.errorsService.getOne(id, auth);
  }

  @Put('v1/errors/:id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateErrorDto,
    @Headers('authorization') auth: string,
  ) {
    return this.errorsService.update(id, dto, auth);
  }

  @Delete('v1/errors/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.errorsService.delete(id, auth);
  }
}
