import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { DevolucionesDto } from './dto/Devoluciones.dto';
import { DevolucionesLibrosService } from './devoluciones-libros.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('devoluciones-libros')
@ApiTags('Devoluciones Libros')
export class DevolucionesLibrosController {
    constructor(private DevolucionesLibrosService : DevolucionesLibrosService){}

    @Get()
    async getDevoluciones(){
        return this.DevolucionesLibrosService.getDevoluciones();
    }

    @Get('/:id')
    async getDevolucionById(@Param('id', ParseIntPipe) id: number){
        return this.DevolucionesLibrosService.getDevolucionById(id);
    }

    @Post()
    async addDevolucion(@Body() devolucion: DevolucionesDto){
        return this.DevolucionesLibrosService.addDevolucion(devolucion);
    }

    @Put('/:id')
    async updateDevolucion(@Param('id', ParseIntPipe) id: number, @Body() devolucion: DevolucionesDto){
        return this.DevolucionesLibrosService.updateDevolucion(id, devolucion);
    }


}
