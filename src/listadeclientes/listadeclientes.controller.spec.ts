import { Test, TestingModule } from '@nestjs/testing';
import { ListaDeClientesController } from './lista-de-clientes.controller';

describe('ListaDeClientesController', () => {
  let controller: ListaDeClientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaDeClientesController],
    }).compile();

    controller = module.get<ListaDeClientesController>(ListaDeClientesController);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});
