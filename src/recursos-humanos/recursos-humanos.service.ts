import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RecursosHumanosDto } from './dto/RecursosHumanos.dto';

@Injectable()
export class RecursosHumanosService {
    constructor(private prisma: PrismaService) {}

    async getAllRecursosHumanos() {
        return await this.prisma.recursosHumanos.findMany();
    }

    async getRecursoHumanoById(id: string) {
        return await this.prisma.recursosHumanos.findUnique({
            where: {
                numero_identificacion: id
            }
        });
    }

    async createRecursoHumano(data: RecursosHumanosDto) {
        return await this.prisma.recursosHumanos.create({
            data
        });
    }

    async updateRecursoHumano(id: string, data: RecursosHumanosDto) {
        return await this.prisma.recursosHumanos.update({
            where: {
                numero_identificacion: id
            },
            data
        });
    }
    
}
