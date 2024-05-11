import { Module } from '@nestjs/common';
import { RecursosHumanosController } from './recursos-humanos.controller';
import { RecursosHumanosService } from './recursos-humanos.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [RecursosHumanosController],
  providers: [RecursosHumanosService,PrismaService]
})
export class RecursosHumanosModule {}
