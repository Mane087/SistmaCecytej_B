import { IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';

export class GrupoDto {
  @IsNotEmpty()
  @IsNumber()
  clave_grupo: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;
}
