// src/duenos/duenos.controller.ts
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { DuenosService } from './duenos.service';

@Controller('duenos')
export class DuenosController {
  constructor(private readonly duenosService: DuenosService) {}

  @Get()
  getDuenos() {
    return this.duenosService.getDuenos();
  }

  @Get('list')
  getMensaje(): string {
    return 'Lista de dueños';
  }

  @Get(':id')
  getDuenio(@Param('id') idDuenio: string) {
    return this.duenosService.getDuenioById(idDuenio);
  }

  @Post()
  crearDuenio(@Body() duenio: any): string {
    return this.duenosService.crearDuenio(duenio);
  }

  @Put(':id')
  modificarDuenio(@Body() duenio: any, @Param('id') idDuenio: string): string {
    this.duenosService.actualizarDuenio(idDuenio, duenio);
    return `Dueño con id ${idDuenio} modificado correctamente`;
  }

  @Delete(':id')
  eliminarDuenio(@Param('id') idDuenio: string): string {
    return this.duenosService.eliminarDuenio(idDuenio);
  }
}
