import { Module } from '@nestjs/common';
import { LaboratorioController } from './laboratorio.controller';
import { LaboratorioService } from './laboratorio.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LaboratorioController],
  providers: [LaboratorioService, PrismaService]
})
export class LaboratorioModule {}
