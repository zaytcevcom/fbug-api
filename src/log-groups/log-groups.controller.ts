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
import { LogGroupsService } from './log-groups.service';
import { CreateLogGroupDto, UpdateLogGroupDto } from './dto';

@Controller('v1/log-groups')
export class LogGroupsController {
  constructor(private readonly logGroupsService: LogGroupsService) {}

  @Get()
  getAll(@Query() query: any, @Headers('authorization') auth: string) {
    return this.logGroupsService.getAll(query, auth);
  }

  @Post()
  create(
    @Body() dto: CreateLogGroupDto,
    @Headers('authorization') auth: string,
  ) {
    return this.logGroupsService.create(dto, auth);
  }

  @Get(':id')
  getById(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.logGroupsService.getById(id, auth);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateLogGroupDto,
    @Headers('authorization') auth: string,
  ) {
    return this.logGroupsService.update(id, dto, auth);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.logGroupsService.delete(id, auth);
  }
}
