import { Test, TestingModule } from '@nestjs/testing';
import { DueniosService } from './duenios.service';

describe('DueniosService', () => {
  let service: DueniosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DueniosService],
    }).compile();

    service = module.get<DueniosService>(DueniosService);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });
});
