import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DtvService } from './dtv.service';

@Controller('dtv')
export class DtvController {
  constructor(private readonly dtvService: DtvService) {}

  @Get()
  getRegistros() {
    return this.dtvService.getRegistros();
  }

  @Get(':id')
  getRegistro(@Param('id') id: string) {
    return this.dtvService.getRegistroById(id);
  }

  @Post('diagnostico')
  crearDiagnostico(@Body() body: any): string {
    return this.dtvService.crearDiagnostico(body);
  }

  @Post('vacuna')
  crearVacuna(@Body() body: any): string {
    return this.dtvService.crearVacuna(body);
  }

  @Post('tratamiento')
  crearTratamiento(@Body() body: any): string {
    return this.dtvService.crearTratamiento(body);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() parcial: any): string {
    return this.dtvService.actualizarRegistro(id, parcial);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string): string {
    return this.dtvService.eliminarRegistro(id);
  }
}
