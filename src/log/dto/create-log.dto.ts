import { IsEnum, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateLogDto {
  @IsEnum(['DEBUG', 'INFO', 'WARN', 'ERROR'])
  level: string;

  @IsString()
  message: string;

  @IsNumber()
  time: number;

  @IsOptional()
  @IsString()
  context?: string;
}
