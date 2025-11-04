// src/turnos/turnos.controller.ts
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { TurnosService } from './turnos.service';

@Controller('turnos')
export class TurnosController {
  constructor(private readonly turnosService: TurnosService) {}

  @Get()
  getTurnos() {
    return this.turnosService.getTurnos();
  }

  @Get('list')
  getMensaje(): string {
    return 'Lista de turnos';
  }

  @Get(':id')
  getTurno(@Param('id') idTurno: string) {
    return this.turnosService.getTurnoById(idTurno);
  }

  @Post()
  crearTurno(@Body() turno: any): string {
    return this.turnosService.crearTurno(turno);
  }

  @Put(':id')
  modificarTurno(@Body() turno: any, @Param('id') idTurno: string): string {
    this.turnosService.actualizarTurno(idTurno, turno);
    return `Turno con id ${idTurno} modificado correctamente`;
  }

  @Delete(':id')
  eliminarTurno(@Param('id') idTurno: string): string {
    return this.turnosService.eliminarTurno(idTurno);
  }
}
