import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { PrestamosDto } from './dto/Prestamos.dto';
import { PrestamosLibrosService } from './prestamos-libros.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('prestamos-libros')
@ApiTags('Prestamos Libros')
export class PrestamosLibrosController {
    constructor(private PrestamosLibrosService : PrestamosLibrosService){}

    @Get()
    async getPrestamos(){
        return this.PrestamosLibrosService.getPrestamos();
    }

    @Get('/:id')
    async getPrestamoById(@Param('id', ParseIntPipe) id: number){
        return this.PrestamosLibrosService.getPrestamoById(id);
    }

    @Post()
    async addPrestamo(@Body() prestamo: PrestamosDto){
        return this.PrestamosLibrosService.addPrestamo(prestamo);
    }

    @Put('/:id')
    async updatePrestamo(@Param('id', ParseIntPipe) id: number, @Body() prestamo: PrestamosDto){
        return this.PrestamosLibrosService.updatePrestamo(id, prestamo);
    }

}
