import { Module } from '@nestjs/common';

@Module({})
export class ClienteModel {
  id: string;
  nombre: string;
  telefono: string;
  email: string;
}
