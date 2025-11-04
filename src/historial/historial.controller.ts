// src/historial/historial.controller.ts
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { HistorialService } from './historial.service';

@Controller('historial')
export class HistorialController {
  constructor(private readonly historialService: HistorialService) {}

  @Get()
  getHistorial() {
    return this.historialService.getHistorial();
  }

  @Get('list')
  getMensaje(): string {
    return 'Lista de eventos del historial';
  }

  @Get(':idMascota')
  getHistorialPorMascota(@Param('idMascota') idMascota: string) {
    return this.historialService.getHistorialPorMascota(idMascota);
  }

  @Post()
  crearEvento(@Body() evento: any): string {
    return this.historialService.crearEvento(evento);
  }

  @Put(':id')
  modificarEvento(@Body() evento: any, @Param('id') idEvento: string): string {
    this.historialService.actualizarEvento(idEvento, evento);
    return `Evento con id ${idEvento} modificado correctamente`;
  }

  @Delete(':id')
  eliminarEvento(@Param('id') idEvento: string): string {
    return this.historialService.eliminarEvento(idEvento);
  }
}
