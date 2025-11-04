// src/mascotas/mascotas.service.ts
import { Injectable } from '@nestjs/common';

export class MascotaModel {
  id: string;
  nombre: string;
  especie: string; // Perro, Gato, etc.
  raza?: string;
  edad?: string;
  idDuenio: string; // <-- sin ñ
}

@Injectable()
export class MascotasService {
  mascotas: MascotaModel[] = [];

  constructor() {
    let m: MascotaModel = { id: '1', nombre: 'Pepe', especie: 'Perro', raza: 'Bulldog', edad: '1', idDuenio: '1' };
    this.mascotas.push(m);
    m = { id: '2', nombre: 'Branca', especie: 'Gato', raza: 'British', edad: '2', idDuenio: '2' };
    this.mascotas.push(m);
  }

  getMascotas() {
    return this.mascotas;
  }

  getMascotaById(id: string) {
    for (const m of this.mascotas) {
      if (m.id === id) return m;
    }
    return 'Mascota no encontrada';
  }

  getMascotasPorDuenio(idDuenio: string) {
    const lista: MascotaModel[] = [];
    for (const m of this.mascotas) {
      if (m.idDuenio === idDuenio) {
        lista.push(m);
      }
    }
    return lista;
  }

  crearMascota(mascota: MascotaModel): string {
    const nueva: MascotaModel = {
      id: mascota.id,
      nombre: mascota.nombre,
      especie: mascota.especie,
      raza: mascota.raza,
      edad: mascota.edad,
      idDuenio: mascota.idDuenio, // <-- OK
    };
    this.mascotas.push(nueva);
    return 'Mascota creada correctamente';
  }

  actualizarMascota(id: string, parcial: Partial<MascotaModel>) {
    for (let i = 0; i < this.mascotas.length; i++) {
      if (this.mascotas[i].id === id) {
        this.mascotas[i] = { ...this.mascotas[i], ...parcial };
        return 'Mascota actualizada correctamente';
      }
    }
    return 'Mascota no encontrada';
  }

  eliminarMascota(id: string) {
    for (let i = 0; i < this.mascotas.length; i++) {
      if (this.mascotas[i].id === id) {
        this.mascotas.splice(i, 1);
        return 'Mascota eliminada correctamente';
      }
    }
    return 'Mascota no encontrada';
  }
}
