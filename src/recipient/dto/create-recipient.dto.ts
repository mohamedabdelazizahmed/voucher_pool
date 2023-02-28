import { IsDataURI, IsDate, isDate, IsEmail, IsNumber, IsString } from 'class-validator';
import { Unique } from 'typeorm';

@Unique(['email'])
export class CreateRecipientDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;



}