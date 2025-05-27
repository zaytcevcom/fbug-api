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
import { ErrorsGroupsService } from './errors-groups.service';
import { CreateErrorGroupDto, UpdateErrorGroupDto } from './dto';

@Controller('v1/error-groups')
export class ErrorsGroupsController {
  constructor(private readonly errorsGroupsService: ErrorsGroupsService) {}

  @Get()
  getAll(@Query() query: any, @Headers('authorization') auth: string) {
    return this.errorsGroupsService.getAll(query, auth);
  }

  @Post()
  create(
    @Body() dto: CreateErrorGroupDto,
    @Headers('authorization') auth: string,
  ) {
    return this.errorsGroupsService.create(dto, auth);
  }

  @Get(':id')
  getById(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.errorsGroupsService.getById(id, auth);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateErrorGroupDto,
    @Headers('authorization') auth: string,
  ) {
    return this.errorsGroupsService.update(id, dto, auth);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.errorsGroupsService.delete(id, auth);
  }
}
