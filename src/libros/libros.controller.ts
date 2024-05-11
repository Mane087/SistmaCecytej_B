import { Body, Controller, Get, ParseIntPipe, Post, Put, Param } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { LibroDto } from './dto/Libro.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('libros')
@ApiTags('libros')
export class LibrosController {
    constructor(private librosService: LibrosService) {}

    @Get()
    getAllLibros() {
        return this.librosService.findAllLibros();
    }

    @Get('/:id')
    getLibroById(@Param ('id', ParseIntPipe) id: number){
        return this.librosService.findLibroById(id);
    }

    @Post()
    createLibro(@Body() libro: LibroDto){
        console.log('datos del libro', libro);
        return this.librosService.createLibro(libro);
    }

    @Put('/:id')
    updateLibro(@Body() libro: LibroDto, @Param('id', ParseIntPipe) id: number){
        return this.librosService.updateLibro(id, libro);
    }

}
