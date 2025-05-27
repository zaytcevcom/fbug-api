import { IsString, IsOptional } from 'class-validator';

export class GetErrorStatsQueryDto {
  @IsString() projectId: string;
  @IsOptional() @IsString() groupId?: string;
}
