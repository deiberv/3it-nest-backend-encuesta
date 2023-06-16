import { ApiProperty } from "@nestjs/swagger";

export class ResultadoEncuestaDto {

  @ApiProperty({
    description: 'Identificador del estilo',
    example: '53ad55f0-5cea-4a15-aa3f-46318b4b0821'
  })
  idEstilo: string;
  @ApiProperty({
    description: 'Nombre del estilo',
    example: 'Salsa'
  })
  nombreEstilo: string;
  @ApiProperty({
    description: 'Total de votos',
    example: '10'
  })
  total: number

}