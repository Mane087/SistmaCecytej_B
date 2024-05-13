import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RecursosHumanosDto } from './dto/RecursosHumanos.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(recursosHumanos: RecursosHumanosDto) {
    const user = await this.prisma.recursosHumanos.findUnique({
      where: {
        numero_identificacion: recursosHumanos.numero_identificacion,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isPasswordValid = user.password === recursosHumanos.password;

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return user;
  }
}
