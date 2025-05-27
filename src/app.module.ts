import { Module } from '@nestjs/common';
import { ErrorsModule } from './errors/errors.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { ErrorsGroupsModule } from './errors-groups/errors-groups.module';
import { LogsModule } from './log/logs.module';
import { LogGroupsModule } from './log-groups/log-groups.module';

@Module({
  imports: [
    AuthModule,
    ProjectsModule,
    ErrorsGroupsModule,
    ErrorsModule,
    LogGroupsModule,
    LogsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
