import { IsOptional, IsString, IsInt, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class GetLogsQueryDto {
  @IsOptional() @IsString() projectId?: string;
  @IsOptional() @Type(() => Number) @IsInt() timeFrom?: number;
  @IsOptional() @Type(() => Number) @IsInt() timeTo?: number;
  @IsOptional() @IsString() search?: string;
  @IsOptional() @IsIn(['asc', 'desc']) sort?: string = 'desc';
  @IsOptional() @Type(() => Number) @IsInt() limit?: number = 50;
  @IsOptional() @Type(() => Number) @IsInt() offset?: number = 0;
}
