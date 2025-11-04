// src/diagnosticos-tratamientos-vacunas/dtv.service.ts
import { Injectable } from '@nestjs/common';

export type TipoRegistro = 'diagnostico' | 'vacuna' | 'tratamiento';

export interface RegistroClinicoModel {
  id: string;
  idMascota: string;
  tipo: TipoRegistro;
  descripcion: string;
  fechaISO: string;
}

@Injectable()
export class DtvService {
  private registros: RegistroClinicoModel[] = [];

  constructor() {
    this.registros.push({
      id: '1',
      idMascota: '1',
      tipo: 'diagnostico',
      descripcion: 'Otitis externa',
      fechaISO: new Date().toISOString(),
    });
  }

  getRegistros() {
    return this.registros;
  }

  getRegistroById(id: string) {
    const r = this.registros.find(x => x.id === id);
    return r ?? 'Registro no encontrado';
  }

  crearDiagnostico(data: any): string {
    this.registros.push({
      id: data.id,
      idMascota: data.idMascota,
      tipo: 'diagnostico',
      descripcion: data.descripcion,
      fechaISO: data.fechaISO ?? new Date().toISOString(),
    });
    return 'Diagnóstico creado correctamente';
  }

  crearVacuna(data: any): string {
    this.registros.push({
      id: data.id,
      idMascota: data.idMascota,
      tipo: 'vacuna',
      descripcion: data.descripcion,
      fechaISO: data.fechaISO ?? new Date().toISOString(),
    });
    return 'Vacuna registrada correctamente';
  }

  crearTratamiento(data: any): string {
    this.registros.push({
      id: data.id,
      idMascota: data.idMascota,
      tipo: 'tratamiento',
      descripcion: data.descripcion,
      fechaISO: data.fechaISO ?? new Date().toISOString(),
    });
    return 'Tratamiento creado correctamente';
  }

  actualizarRegistro(id: string, parcial: Partial<RegistroClinicoModel>): string {
    const i = this.registros.findIndex(x => x.id === id);
    if (i === -1) return 'Registro no encontrado';
    this.registros[i] = { ...this.registros[i], ...parcial };
    return 'Registro con id ' + id + ' modificado correctamente';
  }

  eliminarRegistro(id: string): string {
    const i = this.registros.findIndex(x => x.id === id);
    if (i === -1) return 'Registro no encontrado';
    this.registros.splice(i, 1);
    return 'Registro eliminado correctamente';
  }
}

 