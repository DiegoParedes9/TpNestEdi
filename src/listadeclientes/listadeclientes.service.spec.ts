import { Test, TestingModule } from '@nestjs/testing';
import { ListaDeClientesService } from './lista-de-clientes.service';

describe('ListaDeClientesService', () => {
  let service: ListaDeClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaDeClientesService],
    }).compile();

    service = module.get<ListaDeClientesService>(ListaDeClientesService);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });
});
