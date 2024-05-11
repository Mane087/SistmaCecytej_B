import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class DevolucionesDto {
  @IsNotEmpty()
  @IsNumber()
  numero_devolucion: number;

  @IsNotEmpty()
  @IsString()
  numero_control: string;

  @IsNotEmpty()
  @IsNumber()
  num_serie: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  fecha_devolucion: Date;
}
