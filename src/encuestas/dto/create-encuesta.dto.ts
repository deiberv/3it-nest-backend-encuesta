import { IsString, MinLength, IsEmail, IsUUID } from "class-validator";

export class CreateEncuestaDto {
  @IsString()
  @MinLength(1)
  @IsEmail()
  email: string;

  @IsString()
  @IsUUID()
  estilo: string;
}
