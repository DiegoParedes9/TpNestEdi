import { Test, TestingModule } from '@nestjs/testing';
import { HistorialService } from './historial.service';

describe('HistorialService', () => {
  let service: HistorialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialService],
    }).compile();

    service = module.get<HistorialService>(HistorialService);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });
});
