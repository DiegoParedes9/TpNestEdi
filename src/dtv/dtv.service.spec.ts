import { Test, TestingModule } from '@nestjs/testing';
import { DtvService } from './dtv.service';

describe('DtvService', () => {
  let service: DtvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DtvService],
    }).compile();

    service = module.get<DtvService>(DtvService);
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });
});
