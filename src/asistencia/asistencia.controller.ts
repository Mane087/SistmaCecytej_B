import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AsistenciaDto } from './dto/Asistencia.dto';
import { AsistenciaService } from './asistencia.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('asistencia')
@ApiTags('asistencia')
export class AsistenciaController {
    constructor(private AsistenciaService: AsistenciaService) {}

    @Get()
    getAllAsistencias() {
        return this.AsistenciaService.getAllAsistencias();
    }

    @Get('/:id')
    getAsistenciaById(@Param('id', ParseIntPipe) id: number) {
        return this.AsistenciaService.getAsistenciaById(id);
    }

    @Post()
    createAsistencia(@Body() asistencia: AsistenciaDto) {
        return this.AsistenciaService.createAsistencia(asistencia);
    }

    @Put('/:id')
    updateAsistencia(@Body() asistencia: AsistenciaDto, @Param('id', ParseIntPipe) id: number) {
        return this.AsistenciaService.updateAsistencia(id, asistencia);
    }

}
