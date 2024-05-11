import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RecursosHumanosDto } from './dto/RecursosHumanos.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}

    async login(recursosHumanos: RecursosHumanosDto) {
        return this.prisma.recursosHumanos.findUnique({
            where: {
                numero_identificacion: recursosHumanos.numero_identificacion,
                password: recursosHumanos.password
            }
        });
    }


}
