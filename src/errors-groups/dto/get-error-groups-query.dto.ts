import { IsOptional, IsString, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class GetErrorGroupsQueryDto {
  @IsOptional() @IsString() projectId?: string;
  @IsOptional() @Type(() => Number) @IsInt() timeFrom?: number;
  @IsOptional() @Type(() => Number) @IsInt() timeTo?: number;
}
