import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ErrorsController } from './errors.controller';
import { ErrorsService } from './errors.service';

@Module({
  imports: [HttpModule],
  controllers: [ErrorsController],
  providers: [ErrorsService],
})
export class ErrorsModule {}
