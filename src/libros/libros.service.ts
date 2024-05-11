import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LibroDto } from './dto/Libro.dto';

@Injectable()
export class LibrosService {
  constructor(private prisma: PrismaService) {}

  async findAllLibros() {
    return this.prisma.libro.findMany();
  }

  async findLibroById(id: number) {
    return this.prisma.libro.findUnique({ where: { num_serie: id } });
  }

  async createLibro(libro: LibroDto) {
    return this.prisma.libro.create({ data: libro });
  }

  async updateLibro(id: number, libro: LibroDto) {
    return this.prisma.libro.update({
      where: { num_serie: id },
      data: libro,
    });
  }
}
