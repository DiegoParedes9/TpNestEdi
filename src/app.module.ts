import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DtvModule } from './dtv/dtv.module';
import { DuenosModule } from './duenos/duenos.module';
import { MascotasModule } from './mascotas/mascotas.module';
import { ClientesModule } from './clientes/clientes.module';
import { TurnosModule } from './turnos/turnos.module';
import { HistorialModule } from './historial/historial.module';
import { ListaDeClientesModule } from './listadeclientes/listadeclientes.module';

@Module({
  imports: [
    DtvModule,
    DuenosModule,
    MascotasModule,
    ClientesModule,
    TurnosModule,
    HistorialModule,
    ListaDeClientesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}