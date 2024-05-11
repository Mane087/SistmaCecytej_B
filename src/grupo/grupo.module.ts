import { Module } from '@nestjs/common';
import { GrupoController } from './grupo.controller';
import { GrupoService } from './grupo.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [GrupoController],
  providers: [GrupoService, PrismaService]
})
export class GrupoModule {}
