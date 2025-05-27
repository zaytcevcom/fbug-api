import { PartialType } from '@nestjs/mapped-types';
import { CreateErrorGroupDto } from './create-error-group.dto';

export class UpdateErrorGroupDto extends PartialType(CreateErrorGroupDto) {}
