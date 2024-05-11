import { Module } from '@nestjs/common';
import { AsistenciaController } from './asistencia.controller';
import { AsistenciaService } from './asistencia.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AsistenciaController],
  providers: [AsistenciaService, PrismaService]
})
export class AsistenciaModule {}
