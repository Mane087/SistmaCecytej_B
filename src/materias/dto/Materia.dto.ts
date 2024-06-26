import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class MateriasDto {

    @IsNotEmpty()
    @IsNumber()
    clave_materia: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    grado: string;

    @IsNotEmpty()
    @IsString()
    horario: string;

    @IsNotEmpty()
    @IsString()
    alumnosNumero_control: string;
}

