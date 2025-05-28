import { Controller, Get, Param, Query, Headers } from '@nestjs/common';
import { ErrorsService } from './errors.service';
import { GetErrorsQueryDto, GetErrorStatsQueryDto } from './dto';

@Controller()
export class ErrorsController {
  constructor(private readonly errorsService: ErrorsService) {}

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
}
