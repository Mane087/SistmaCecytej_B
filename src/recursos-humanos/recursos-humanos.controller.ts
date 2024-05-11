import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { RecursosHumanosService } from './recursos-humanos.service';
import { RecursosHumanosDto } from './dto/RecursosHumanos.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('RH')
@ApiTags('Recursos Humanos')
export class RecursosHumanosController {
    constructor(private RecursosHumanosService: RecursosHumanosService) {}

    @Get()
    getAllRecursosHumanos() {
        return this.RecursosHumanosService.getAllRecursosHumanos();
    }

    @Get('/:id')
    getRecursoHumanoById(@Param('id') id: string) {
        return this.RecursosHumanosService.getRecursoHumanoById(id);
    }

    @Post()
    createRecursoHumano(@Body() recursoHumano: RecursosHumanosDto) {
        console.log('datos del recurso humano', recursoHumano);
        return this.RecursosHumanosService.createRecursoHumano(recursoHumano);
    }   

    @Put('/:id')
    updateRecursoHumano(@Body() recursoHumano: RecursosHumanosDto, @Param('id') id: string){
        return this.RecursosHumanosService.updateRecursoHumano(id, recursoHumano);
    }
}
