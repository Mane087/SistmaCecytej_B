import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { LaboratorioDto } from './dto/Laboratorio.dto';
import { LaboratorioService } from './laboratorio.service';

@Controller('laboratorio')
export class LaboratorioController {
    constructor(private laboratorioService: LaboratorioService) {}

    @Get()
    async getLaboratorios() {
        return this.laboratorioService.getLaboratorios();
    }

    @Get('/:id')
    async getLaboratorioById(@Param('id', ParseIntPipe) id: number) {
        return this.laboratorioService.getLaboratorioById(id);
    }

    @Post()
    async addLaboratorio(@Body() laboratorio: LaboratorioDto) {
        return this.laboratorioService.addLaboratorio(laboratorio);
    }

    @Put('/:id')
    async updateLaboratorio(@Param('id', ParseIntPipe) id: number, @Body() laboratorio: LaboratorioDto) {
        return this.laboratorioService.updateLaboratorio(id, laboratorio);
    }
}
