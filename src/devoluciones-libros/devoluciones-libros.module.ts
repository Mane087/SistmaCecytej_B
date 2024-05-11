import { Module } from '@nestjs/common';
import { DevolucionesLibrosController } from './devoluciones-libros.controller';
import { DevolucionesLibrosService } from './devoluciones-libros.service';
import  {PrismaService} from '../prisma.service';

@Module({
  controllers: [DevolucionesLibrosController],
  providers: [DevolucionesLibrosService, PrismaService]
})
export class DevolucionesLibrosModule {}
