import { Module } from '@nestjs/common';
import { ListaDeClientesController } from './listadeclientes.controller';
import { ListaDeClientesService } from './listadeclientes.service';

@Module({
  controllers: [ListaDeClientesController],
  providers: [ListaDeClientesService],
  exports: [ListaDeClientesService],
})
export class ListaDeClientesModule {
  id: string;
  nombre: string;
  telefono: string;
}
