// src/clientes/clientes.controller.ts
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  getClientes() {
    return this.clientesService.getClientes();
  }

  @Get('list')
  getMensaje(): string {
    return 'Lista de clientes';
  }

  @Get(':id')
  getCliente(@Param('id') idCliente: string) {
    return this.clientesService.getClienteById(idCliente);
  }

  @Post()
  crearCliente(@Body() cliente: any): string {
    return this.clientesService.crearCliente(cliente);
  }

  @Put(':id')
  modificarCliente(@Body() cliente: any, @Param('id') idCliente: string): string {
    this.clientesService.actualizarCliente(idCliente, cliente);
    return `Cliente con id ${idCliente} modificado correctamente`;
  }

  @Delete(':id')
  eliminarCliente(@Param('id') idCliente: string): string {
    return this.clientesService.eliminarCliente(idCliente);
  }
}
