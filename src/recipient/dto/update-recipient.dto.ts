import { IsDataURI, IsDate, isDate, IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateRecipientDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;



}