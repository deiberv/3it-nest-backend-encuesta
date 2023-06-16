import { Optional } from "@nestjs/common";
import { IsArray, IsEmail, IsIn, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { ValidRoles } from "../interfaces";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

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

  @ApiProperty({
    description: "Nombre del usuario",
    example: "Usuario Usuario",
    required: true
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  fullName: string;

  @ApiProperty({
    description: "Roles del usuario",
    example: ["ROLE_ADMIN","ROLE_USER"],
    enum: ValidRoles,
    required: false
  })
  @Optional()
  @IsArray()
  roles?: ValidRoles[];

}