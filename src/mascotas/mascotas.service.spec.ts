import { Test, TestingModule } from '@nestjs/testing';
import { MascotasService } from './mascotas.service';

describe('MascotasService', () => {
  let service: MascotasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MascotasService],
    }).compile();

    service = module.get<MascotasService>(MascotasService);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });
});
