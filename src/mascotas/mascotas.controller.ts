
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { MascotasService } from './mascotas.service';

@Controller('mascotas')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}

  @Get()
  getMascotas() {
    return this.mascotasService.getMascotas();
  }

  @Get('list')
  getMensaje(): string {
    return 'Lista de mascotas';
  }

  @Get(':id')
  getMascota(@Param('id') idMascota: string) {
    return this.mascotasService.getMascotaById(idMascota);
  }

  @Get('por-duenio/:idDuenio')
  getMascotasPorDuenio(@Param('idDuenio') idDuenio: string) {
    return this.mascotasService.getMascotasPorDuenio(idDuenio);
  }

  @Post()
  crearMascota(@Body() mascota: any): string {
    return this.mascotasService.crearMascota(mascota);
  }

  @Put(':id')
  modificarMascota(@Body() mascota: any, @Param('id') idMascota: string): string {
    this.mascotasService.actualizarMascota(idMascota, mascota);
    return `Mascota con id ${idMascota} modificada correctamente`;
  }

  @Delete(':id')
  eliminarMascota(@Param('id') idMascota: string): string {
    return this.mascotasService.eliminarMascota(idMascota);
  }
}
