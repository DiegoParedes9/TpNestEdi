import { Injectable } from '@nestjs/common';

export interface ClienteModel {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
}

@Injectable()
export class ClientesService {
  clientes: ClienteModel[] = [];

  constructor() {
    let c = { id: '1', nombre: 'Juan Perez', telefono: '2494234567', email: 'juan@mail.com' };
    this.clientes.push(c);
    c = { id: '2', nombre: 'Maria Gomez', telefono: '2494234568', email: 'maria@mail.com' };
    this.clientes.push(c);
  }

  getClientes() {
    return this.clientes;
  }

  getClienteById(id: string) {
    for (const c of this.clientes) {
      if (c.id === id) return c;
    }
    return 'Cliente no encontrado';
  }

  crearCliente(cliente: ClienteModel): string {
    const nuevo = {
      id: cliente.id,
      nombre: cliente.nombre,
      telefono: cliente.telefono,
      email: cliente.email,
    };
    this.clientes.push(nuevo);
    return 'Cliente creado correctamente';
  }

  actualizarCliente(id: string, parcial: Partial<ClienteModel>) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].id === id) {
        this.clientes[i] = { ...this.clientes[i], ...parcial };
        return 'Cliente actualizado correctamente';
      }
    }
    return 'Cliente no encontrado';
  }

  eliminarCliente(id: string) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].id === id) {
        this.clientes.splice(i, 1);
        return 'Cliente eliminado';
      }
    }
    return 'Cliente no encontrado';
  }
}
