import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LaboratorioDto } from './dto/Laboratorio.dto';

@Injectable()
export class LaboratorioService {
    constructor(private prisma: PrismaService) {}

    async getLaboratorios() {
        return this.prisma.laboratorio.findMany();
    }

    async getLaboratorioById(id: number) {
        return this.prisma.laboratorio.findUnique({
            where: {
                clave_laboratorio: id
            }
        });
    }

    async addLaboratorio(laboratorio: LaboratorioDto) {
        return this.prisma.laboratorio.create({
            data: laboratorio
        });
    }

    async updateLaboratorio(id: number, laboratorio: LaboratorioDto) {
        return this.prisma.laboratorio.update({
            where: {
                clave_laboratorio: id
            },
            data: laboratorio
        });
    }

}
