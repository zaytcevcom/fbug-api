import { IsString, IsInt, IsOptional, IsNumber } from 'class-validator';

export class CreateErrorDto {
  @IsString() file: string;
  @IsInt() line: number;
  @IsString() message: string;
  @IsString() stacktrace: string;

  @IsOptional() @IsString() method?: string;
  @IsOptional() @IsString() url?: string;
  @IsOptional() @IsString() ip?: string;
  @IsOptional() @IsNumber() time?: number;
  @IsOptional() @IsString() context?: string;
  @IsOptional() @IsString() session?: string;
  @IsOptional() @IsString() headers?: string;
  @IsOptional() @IsString() cookies?: string;
  @IsOptional() @IsString() env?: string;
  @IsOptional() @IsString() queryParams?: string;
  @IsOptional() @IsString() bodyParams?: string;
  @IsOptional() @IsString() files?: string;
}
