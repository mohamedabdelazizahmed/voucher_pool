import { IsEmail, IsString, MaxLength } from 'class-validator';
import { Unique } from 'typeorm';

export class VerifyVoucherDto {
  @IsString()
  @MaxLength(6)
  code: string;

  @IsEmail()
  email: string;

}