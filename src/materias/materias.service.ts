import { Injectable } from '@nestjs/common';
import { MateriasDto } from './dto/Materia.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MateriasService {
    constructor(private prisma: PrismaService) {}

    async getAllMaterias() {
        return this.prisma.materias.findMany();
    }

    async getMateriaById(id: number) {
        return this.prisma.materias.findUnique({
            where: {
                clave_materia: id
            }
        });
    }

    async createMateria(materia: MateriasDto) {
        return this.prisma.materias.create({
            data: materia
        });
    }

    async updateMateria(id: number, materia: MateriasDto) {
        return this.prisma.materias.update({
            where: {
                clave_materia: id
            },
            data: materia
        });
    }
}
