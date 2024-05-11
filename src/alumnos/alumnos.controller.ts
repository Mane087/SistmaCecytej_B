import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { AlumnoDto } from './dto/Alumno.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('Alumnos')
@ApiTags('Alumnos')
export class AlumnosController {
  constructor(private AlumnosService: AlumnosService) {}

  @Get()
  getAllAlumnos() {
    return this.AlumnosService.getAllAlumnos();
  }

  @Get('/:id')
  getAlumnoById(@Param('id') id: string) {
    return this.AlumnosService.getAlumnoById(id);
  }

  @Post()
  createAlumno(@Body() alumno: AlumnoDto) {
    console.log('datos del alumno', alumno);
    return this.AlumnosService.createAlumno(alumno);
  }

  @Put('/:id')
  updateAlumno(@Body() alumno: AlumnoDto, @Param('id') id: string){
    return this.AlumnosService.updateAlumno(id, alumno);
  }

}
