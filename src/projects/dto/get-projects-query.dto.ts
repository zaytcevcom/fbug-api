import { IsOptional, IsInt, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class GetProjectsQueryDto {
  @IsOptional() @IsIn(['asc', 'desc']) sort?: string = 'desc';
  @IsOptional() @Type(() => Number) @IsInt() limit?: number = 50;
  @IsOptional() @Type(() => Number) @IsInt() offset?: number = 0;
}
