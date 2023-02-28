import { ApiProperty } from '@nestjs/swagger';
import { IsDataURI, IsDate, isDate, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateOfferDto {
  @ApiProperty({
    description:"The name of the Offer ",
    example:"OfferOne"
  })
  @IsString()
  name: string;

  @ApiProperty({
    description:"The  Discount for  Offer ",
    example:"10"
  })
  @IsString()
  discount: string;




}