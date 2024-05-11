import { IsNotEmpty, IsString, IsNumber} from 'class-validator';

export class LaboratorioDto {
  @IsNotEmpty()
  @IsNumber()
  clave_laboratorio: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  ubicacion: string;

  @IsNotEmpty()
  @IsString()
  disponibilidad_semanal: string;

  @IsNotEmpty()
  @IsString()
  horario: string;

  @IsNotEmpty()
  @IsNumber()
  capacidad: number;
}
