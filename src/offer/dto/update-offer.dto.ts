import { IsDataURI, IsDate, isDate, IsEmail, IsNumber, IsString } from 'class-validator';

export class UpdateOfferDto {
  @IsString()
  name: string;

  @IsString()
  discount: string;




}