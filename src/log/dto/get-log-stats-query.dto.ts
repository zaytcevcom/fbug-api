import { IsString, IsOptional } from 'class-validator';

export class GetLogStatsQueryDto {
  @IsString() projectId: string;
  @IsOptional() @IsString() groupId?: string;
}
