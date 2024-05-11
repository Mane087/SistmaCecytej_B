import { Body, Controller, Get, ParseIntPipe, Post, Put, Param } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { MateriasDto } from './dto/Materia.dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('materias')
@ApiTags('materias')
export class MateriasController {
    constructor(private MateriasService: MateriasService) {}

    @Get()
    getAllMaterias() {
        return this.MateriasService.getAllMaterias();
    }

    @Get('/:id')
    getMateriaById(@Param ('id', ParseIntPipe) id: number){
        return this.MateriasService.getMateriaById(id);
    }

    @Post()
    createMateria(@Body() materia: MateriasDto){
        return this.MateriasService.createMateria(materia);
    }

    @Put('/:id')
    updateMateria(@Body() materia: MateriasDto, @Param('id', ParseIntPipe) id: number){
        return this.MateriasService.updateMateria(id, materia);
    }

}
