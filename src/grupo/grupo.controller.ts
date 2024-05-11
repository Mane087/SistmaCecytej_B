import { Body, Controller, Get, ParseIntPipe, Post, Put, Param } from '@nestjs/common';
import { GrupoService } from './grupo.service';
import { GrupoDto } from './dto/grupo.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('grupo')
@ApiTags('grupo')
export class GrupoController {
    constructor(private GrupoService: GrupoService) {}

    @Get()
    getAllGrupos() {
        return this.GrupoService.getAllGrupos();
    }

    @Get('/:id')
    getGrupoById(@Param ('id', ParseIntPipe) id: number){
        return this.GrupoService.getGrupoById(id);
    }

    @Post()
    createGrupo(@Body() grupo: GrupoDto){
        console.log('datos del grupo', grupo);
        return this.GrupoService.createGrupo(grupo);
    }

    @Put('/:id')
    updateGrupo(@Body() grupo: GrupoDto, @Param('id', ParseIntPipe) id: number){
        return this.GrupoService.updateGrupo(id, grupo);
    }

}
