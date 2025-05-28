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
import { ProjectsService } from './projects.service';
import { CreateProjectDto, GetProjectsQueryDto, UpdateProjectDto } from './dto';

@Controller('v1/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getAll(
    @Query() query: GetProjectsQueryDto,
    @Headers('authorization') auth: string,
  ) {
    return this.projectsService.getAll(query, auth);
  }

  @Post()
  create(
    @Body() dto: CreateProjectDto,
    @Headers('authorization') auth: string,
  ) {
    return this.projectsService.create(dto, auth);
  }

  @Get(':id')
  getById(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.projectsService.getById(id, auth);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProjectDto,
    @Headers('authorization') auth: string,
  ) {
    return this.projectsService.update(id, dto, auth);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.projectsService.delete(id, auth);
  }

  @Get(':id/dsn')
  getDSN(@Param('id') id: string, @Headers('authorization') auth: string) {
    return this.projectsService.getDSN(id, auth);
  }
}
