import { Injectable } from '@nestjs/common';

export interface EventoHistorialModel {
  id: string;
  idMascota: string;
  titulo: string;
  detalle: string;
  fechaISO: string;
}

@Injectable()
export class HistorialService {
  historial: EventoHistorialModel[] = [];

  constructor() {
    let h = { id: '1', idMascota: '1', titulo: 'Consulta', detalle: 'Control general', fechaISO: '2025-11-01T09:00:00.000Z' };
    this.historial.push(h);
  }

  getHistorial() {
    return this.historial;
  }

  getHistorialPorMascota(idMascota: string) {
    const lista: EventoHistorialModel[] = [];
    for (const e of this.historial) {
      if (e.idMascota === idMascota) {
        lista.push(e);
      }
    }
    return lista;
  }

  crearEvento(evento: EventoHistorialModel) {
    const nuevo = {
      id: evento.id,
      idMascota: evento.idMascota,
      titulo: evento.titulo,
      detalle: evento.detalle,
      fechaISO: evento.fechaISO,
    };
    this.historial.push(nuevo);
    return 'Evento agregado al historial';
  }

  actualizarEvento(id: string, parcial: Partial<EventoHistorialModel>) {
    for (let i = 0; i < this.historial.length; i++) {
      if (this.historial[i].id === id) {
        this.historial[i] = { ...this.historial[i], ...parcial };
        return 'Evento actualizado';
      }
    }
    return 'Evento no encontrado';
  }

  eliminarEvento(id: string) {
    for (let i = 0; i < this.historial.length; i++) {
      if (this.historial[i].id === id) {
        this.historial.splice(i, 1);
        return 'Evento eliminado';
      }
    }
    return 'Evento no encontrado';
  }
}
