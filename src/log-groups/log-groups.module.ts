import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LogGroupsController } from './log-groups.controller';
import { LogGroupsService } from './log-groups.service';

@Module({
  imports: [HttpModule],
  controllers: [LogGroupsController],
  providers: [LogGroupsService],
})
export class LogGroupsModule {}
