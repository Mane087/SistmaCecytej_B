import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsOptional,
} from 'class-validator';

export class RecursosHumanosDto {
  @IsNotEmpty()
  @IsString()
  numero_identificacion: string;

  @IsOptional()
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  apellido_paterno: string;

  @IsOptional()
  @IsString()
  apellido_materno: string;

  @IsOptional()
  @IsString()
  domicilio: string;

  @IsOptional()
  @IsPhoneNumber('MX')
  @IsString()
  telefono_personal: string;

  @IsOptional()
  @IsString()
  curp: string;

  @IsOptional()
  @IsString()
  nss: string;

  @IsOptional()
  @IsEmail()
  correo_electronico: string;

  @IsOptional()
  @IsString()
  fotografia: string;

  @IsString()
  role: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
