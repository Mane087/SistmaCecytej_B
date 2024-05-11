import { Module } from '@nestjs/common';
import { MateriasController } from './materias.controller';
import { MateriasService } from './materias.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [MateriasController],
  providers: [MateriasService, PrismaService]
})
export class MateriasModule {}
