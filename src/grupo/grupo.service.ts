import { Injectable } from '@nestjs/common';
import { GrupoDto } from './dto/grupo.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GrupoService {
    constructor(private prisma: PrismaService) {}

    async getAllGrupos() {
        return await this.prisma.grupo.findMany();
    }

    async getGrupoById(id: number) {
        return await this.prisma.grupo.findUnique({
            where: {
                clave_grupo: id
            }
        });
    }

    async createGrupo(grupo: GrupoDto) {
        return await this.prisma.grupo.create({
            data: grupo
        });
    }

    async updateGrupo(id: number, grupo: GrupoDto) {
        return await this.prisma.grupo.update({
            where: {
                clave_grupo: id
            },
            data: grupo
        });
    }
}
