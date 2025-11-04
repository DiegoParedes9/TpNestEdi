import { Module } from '@nestjs/common';

@Module({})
export class EventoHistorialModel {
  id: string;
  idMascota: string;
  titulo: string;
  detalle: string;
  fecha: string;
}
