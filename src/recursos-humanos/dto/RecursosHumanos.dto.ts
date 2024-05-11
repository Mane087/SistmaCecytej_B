import { IsNotEmpty, IsString, IsEmail, IsPhoneNumber, IsNumber} from 'class-validator';

export class RecursosHumanosDto{

    @IsNotEmpty()
    @IsString()
    numero_identificacion: string;

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
    @IsString()
    curp: string;

    @IsNotEmpty()
    @IsString()
    nss: string;

    @IsNotEmpty()
    @IsEmail()
    correo_electronico: string;

    @IsNotEmpty()
    @IsString()
    fotografia: string;

    @IsNotEmpty()
    @IsString()
    role : string

    @IsNotEmpty()
    @IsString()
    password: string;
    
}