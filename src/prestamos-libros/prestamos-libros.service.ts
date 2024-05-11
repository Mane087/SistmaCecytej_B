import { Injectable } from '@nestjs/common';
import { PrestamosDto } from './dto/Prestamos.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PrestamosLibrosService {
    constructor(private prisma: PrismaService) {}

    async getPrestamos() {
        return this.prisma.prestamoLibro.findMany();
    }

    async getPrestamoById(id: number) {
        return this.prisma.prestamoLibro.findUnique({
            where: {
                numero_prestamo: id
            }
        });
    }

    async addPrestamo(prestamo: PrestamosDto) {
        return this.prisma.prestamoLibro.create({
            data: prestamo
        });
    }

    async updatePrestamo(id: number, prestamo: PrestamosDto) {
        return this.prisma.prestamoLibro.update({
            where: {
                numero_prestamo: id
            },
            data: prestamo
        });
    }

}
