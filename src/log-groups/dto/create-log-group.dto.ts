import { IsString } from 'class-validator';

export class CreateLogGroupDto {
  @IsString()
  name: string;
}
