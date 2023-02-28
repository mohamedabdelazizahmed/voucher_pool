import { IsDataURI, IsDate, isDate, IsEmail, IsNumber, IsString } from 'class-validator';
import { Unique } from 'typeorm';

@Unique(['email'])
export class CreateVoucherDto {
  @IsString()
  expire_date: string;

  @IsNumber()
  offer_id: number;

  

}