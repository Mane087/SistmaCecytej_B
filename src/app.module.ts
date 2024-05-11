import { Module } from '@nestjs/common';
import { AlumnosModule } from './alumnos/alumnos.module';
import { MateriasModule } from './materias/materias.module';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { RecursosHumanosModule } from './recursos-humanos/recursos-humanos.module';
import { GrupoModule } from './grupo/grupo.module';
import { LaboratorioModule } from './laboratorio/laboratorio.module';
import { PrestamosLibrosModule } from './prestamos-libros/prestamos-libros.module';
import { DevolucionesLibrosModule } from './devoluciones-libros/devoluciones-libros.module';
import { LibrosModule } from './libros/libros.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [AlumnosModule, MateriasModule, AsistenciaModule, RecursosHumanosModule, GrupoModule, LaboratorioModule, PrestamosLibrosModule, DevolucionesLibrosModule, LibrosModule, AuthModule],
})
export class AppModule {}
