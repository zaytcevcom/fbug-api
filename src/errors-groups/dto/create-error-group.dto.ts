import { IsString } from 'class-validator';

export class CreateErrorGroupDto {
  @IsString()
  name: string;
}
