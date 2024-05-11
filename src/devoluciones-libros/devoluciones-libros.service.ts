import { Injectable } from '@nestjs/common';
import { DevolucionesDto } from './dto/Devoluciones.dto';
import  {PrismaService} from '../prisma.service';

@Injectable()
export class DevolucionesLibrosService {
    constructor(private prisma: PrismaService) {}

    async getDevoluciones(){
        return this.prisma.devolucionLibro.findMany();
    }

    async getDevolucionById(id: number){
        return this.prisma.devolucionLibro.findUnique({
            where: {
                numero_devolucion: id
            }
        });
    }

    async addDevolucion(devolucion: DevolucionesDto){
        return this.prisma.devolucionLibro.create({
            data: devolucion
        });
    }

    async updateDevolucion(id: number, devolucion: DevolucionesDto){
        return this.prisma.devolucionLibro.update({
            where: {
                numero_devolucion: id
            },
            data: devolucion
        });
    }


}
