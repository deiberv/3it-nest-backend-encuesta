import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class LoginUserDto {

  @ApiProperty({
    description: "Email del usuario",
    example: "usuario@email.com",
    required: true
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Password del usuario. La contraseña debe tener una letra mayúscula, minúscula y un número",
    example: "Usu123456",
    required: true
  })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'La contraseña debe tener una letra mayúscula, minúscula y un número'
  })
  password: string;

}