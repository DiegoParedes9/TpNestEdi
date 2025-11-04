import { Injectable } from '@nestjs/common';

export class DuenioModel {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
}

@Injectable()
export class DuenosService {
  duenos: DuenioModel[] = [];

  constructor() {
    let d: DuenioModel = { id: '1', nombre: 'Rodolfo Fernandez', telefono: '2494000000', email: 'rodolfo@mail.com' };
    this.duenos.push(d);
    d = { id: '2', nombre: 'Ana Lopez', telefono: '2494111111', email: 'ana@mail.com' };
    this.duenos.push(d);
  }

  getDuenos() {
    return this.duenos;
  }

  getDuenioById(id: string) {
    for (const d of this.duenos) {
      if (d.id === id) return d;
    }
    return 'Dueño no encontrado';
  }

  crearDuenio(duenio: DuenioModel): string {
    const nuevo: DuenioModel = {
      id: duenio.id,
      nombre: duenio.nombre,
      telefono: duenio.telefono,
      email: duenio.email,
    };
    this.duenos.push(nuevo);
    return 'Dueño creado correctamente';
  }

  actualizarDuenio(id: string, parcial: Partial<DuenioModel>) {
    for (let i = 0; i < this.duenos.length; i++) {
      if (this.duenos[i].id === id) {
        this.duenos[i] = { ...this.duenos[i], ...parcial };
        return 'Dueño actualizado correctamente';
      }
    }
    return 'Dueño no encontrado';
  }

  eliminarDuenio(id: string) {
    for (let i = 0; i < this.duenos.length; i++) {
      if (this.duenos[i].id === id) {
        this.duenos.splice(i, 1);
        return 'Dueño eliminado correctamente';
      }
    }
    return 'Dueño no encontrado';
  }
}
