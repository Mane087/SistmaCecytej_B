import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [LibrosController],
  providers: [LibrosService, PrismaService]
})
export class LibrosModule {}
