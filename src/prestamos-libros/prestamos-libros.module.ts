import { Module } from '@nestjs/common';
import { PrestamosLibrosController } from './prestamos-libros.controller';
import { PrestamosLibrosService } from './prestamos-libros.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PrestamosLibrosController],
  providers: [PrestamosLibrosService, PrismaService]
})
export class PrestamosLibrosModule {}
