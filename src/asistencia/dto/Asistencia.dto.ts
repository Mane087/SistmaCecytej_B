import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class AsistenciaDto {
  @IsNotEmpty()
  @IsString()
  numero_control: string;

//   @IsNotEmpty()
//   @IsDate()
//   fecha_asistencia: Date;
}
