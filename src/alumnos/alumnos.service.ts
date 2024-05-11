import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AlumnoDto } from './dto/Alumno.dto';

@Injectable()
export class AlumnosService {
  constructor(private prisma: PrismaService) {}

  getAllAlumnos() {
    return this.prisma.alumnos.findMany();
  }

  getAlumnoById(id: string) {
    return this.prisma.alumnos.findUnique({where: {numero_control: id}});
  }

  createAlumno(alumno: AlumnoDto) {
    return this.prisma.alumnos.create({data: alumno});
  }

  updateAlumno(id: string, alumno: AlumnoDto) {
    return this.prisma.alumnos.update({data: alumno, where: {numero_control: id}});
  }

}
