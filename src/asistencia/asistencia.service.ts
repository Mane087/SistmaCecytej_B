import { Injectable } from '@nestjs/common';
import { AsistenciaDto } from './dto/Asistencia.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AsistenciaService {
    constructor(private prisma: PrismaService) {}

    async getAllAsistencias() {
        return await this.prisma.asistencia.findMany();
    }

    async getAsistenciaById(id: number) {
        return await this.prisma.asistencia.findUnique({
            where: {
                clave_asistencia: id
            }
        });
    }

    async createAsistencia(asistencia: AsistenciaDto) {
        return await this.prisma.asistencia.create({
            data: asistencia
        });
    }

    async updateAsistencia(id: number, asistencia: AsistenciaDto) {
        return await this.prisma.asistencia.update({
            where: {
                clave_asistencia: id
            },
            data: asistencia
        });
    }



}
