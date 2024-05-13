import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class PrestamosDto {
  @IsNotEmpty()
  @IsString()
  numero_control: string;

  @IsNotEmpty()
  @IsNumber()
  num_serie: number;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date) 
  fecha_prestamo: Date;
}
