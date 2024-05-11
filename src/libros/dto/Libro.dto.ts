import { IsNotEmpty, IsString, IsNumber} from 'class-validator';

export class LibroDto {
  @IsNotEmpty()
  @IsNumber()
  num_serie: number;

  @IsNotEmpty()
  @IsString()
  nombre_libro: string;

  @IsNotEmpty()
  @IsString()
  ubicacion: string;

  @IsNotEmpty()
  @IsString()
  clasificacion: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;
}
