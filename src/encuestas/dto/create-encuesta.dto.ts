import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength, IsEmail, IsUUID } from "class-validator";

export class CreateEncuestaDto {
  @ApiProperty({
    description: 'Email del usuario',
    example:'usuario@correo.com',
    nullable: false
  })
  @IsString()
  @MinLength(1)
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Identificador del estilo',
    example: '53ad55f0-5cea-4a15-aa3f-46318b4b0821',
    nullable: false
  })
  @IsString()
  @IsUUID()
  estilo: string;
}
