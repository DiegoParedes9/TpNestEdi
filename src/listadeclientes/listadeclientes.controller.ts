
import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { ListaDeClientesService } from './listadeclientes.service';
@Controller('lista-clientes')
export class ListaDeClientesController {
  constructor(private readonly listaService: ListaDeClientesService) {}

  @Get()
  getLista() {
    return this.listaService.getLista();
  }

  @Get('list')
  getMensaje(): string {
    return 'Lista de clientes simplificada';
  }

  @Post()
  agregarItem(@Body() item: any): string {
    return this.listaService.agregarItem(item);
  }

  @Delete(':id')
  eliminarItem(@Param('id') idItem: string): string {
    return this.listaService.eliminarItem(idItem);
  }
}
