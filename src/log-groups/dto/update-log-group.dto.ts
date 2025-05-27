import { PartialType } from '@nestjs/mapped-types';
import { CreateLogGroupDto } from './create-log-group.dto';

export class UpdateLogGroupDto extends PartialType(CreateLogGroupDto) {}
