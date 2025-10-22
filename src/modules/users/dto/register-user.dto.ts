import { Optional } from '@nestjs/common';
import {
  IsEmail,
  IsString,
  IsInt,
  MinLength,
  MaxLength,
  Min,
  Matches,
  IsOptional,
} from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  first_name: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  last_name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @IsOptional()
  @Min(13)
  age: number;

  @IsString()
  @MinLength(6)
  @MaxLength(32)
  @Matches(
    // eslint-disable-next-line no-useless-escape
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).{6,32}$/,
    {
      message:
        'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  )
  password: string;
}
