import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ErrorsGroupsController } from './errors-groups.controller';
import { ErrorsGroupsService } from './errors-groups.service';

@Module({
  imports: [HttpModule],
  controllers: [ErrorsGroupsController],
  providers: [ErrorsGroupsService],
})
export class ErrorsGroupsModule {}
