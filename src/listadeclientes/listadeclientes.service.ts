import { Injectable } from '@nestjs/common';

export interface ItemListaCliente {
  id: string;
  nombre: string;
  telefono: string;
}

@Injectable()
export class ListaDeClientesService {
  items: ItemListaCliente[] = [];

  constructor() {
    let it = { id: '1', nombre: 'Juan Perez', telefono: '2494234567' };
    this.items.push(it);
    it = { id: '2', nombre: 'Maria Gomez', telefono: '2494876543' };
    this.items.push(it);
    it = { id: '3', nombre: 'Carlos Sanchez', telefono: '2494123789' };
    this.items.push(it);
    
  }

  getLista() {
    return this.items;
  }

  agregarItem(item: ItemListaCliente) {
    const nuevo = { id: item.id, nombre: item.nombre, telefono: item.telefono };
    this.items.push(nuevo);
    return 'Item agregado a la lista';
  }

  eliminarItem(id: string) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
        return 'Item eliminado de la lista';
      }
    }
    return 'Item no encontrado';
  }
}
