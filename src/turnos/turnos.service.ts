import { Injectable } from '@nestjs/common';

export interface TurnoModel {
  id: string;
  idMascota: string;
  motivo: string;
  fechaISO: string; 
}

@Injectable()
export class TurnosService {
  turnos: TurnoModel[] = [];

  constructor() {
    let t = { id: '1', idMascota: '1', motivo: 'Control', fechaISO: '2025-11-10T14:00:00.000Z' };
    this.turnos.push(t);
  }

  getTurnos() {
    return this.turnos;
  }

  getTurnoById(id: string) {
    for (const t of this.turnos) {
      if (t.id === id) return t;
    }
    return 'Turno no encontrado';
  }

  crearTurno(turno: TurnoModel) {
    const nuevo = {
      id: turno.id,
      idMascota: turno.idMascota,
      motivo: turno.motivo,
      fechaISO: turno.fechaISO,
    };
    this.turnos.push(nuevo);
    return 'Turno creado correctamente';
  }

  actualizarTurno(id: string, parcial: Partial<TurnoModel>) {
    for (let i = 0; i < this.turnos.length; i++) {
      if (this.turnos[i].id === id) {
        this.turnos[i] = { ...this.turnos[i], ...parcial };
        return 'Turno actualizado correctamente';
      }
    }
    return 'Turno no encontrado';
  }

  eliminarTurno(id: string) {
    for (let i = 0; i < this.turnos.length; i++) {
      if (this.turnos[i].id === id) {
        this.turnos.splice(i, 1);
        return 'Turno eliminado correctamente';
      }
    }
    return 'Turno no encontrado';
  }
}
