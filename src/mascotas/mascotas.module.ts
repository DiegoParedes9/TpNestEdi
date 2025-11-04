import { Module } from '@nestjs/common';

@Module({})
export class MascotaModel {
  id: string;
  nombre: string;
  especie: string; 
  raza?: string;
  edad?: string;
  idDuenio: string; 
}
