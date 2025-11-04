import { Module } from '@nestjs/common';

@Module({})
export class TurnoModel {
  id: string;
  idMascota: string;
  motivo: string;
  fecha: string; 
}

