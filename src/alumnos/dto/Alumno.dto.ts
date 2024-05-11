import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsNumber,
} from 'class-validator';

export class AlumnoDto {
  @IsNotEmpty()
  @IsString()
  numero_control: string;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apellido_paterno: string;

  @IsNotEmpty()
  @IsString()
  apellido_materno: string;

  @IsString()
  domicilio: string;

  @IsNotEmpty()
  @IsPhoneNumber('MX')
  @IsString()
  telefono_personal: string;

  @IsNotEmpty()
  @IsPhoneNumber('MX')
  @IsString()
  telefono_padre_tutor: string;

  @IsNotEmpty()
  @IsString()
  curp: string;

  @IsNotEmpty()
  @IsEmail()
  correo_electronico: string;

  @IsString()
  fotografia: string;

  @IsNotEmpty()
  @IsNumber()
  clave_grupo: number;
}
