import { Test, TestingModule } from '@nestjs/testing';
import { DtvController } from './dtv.controller';

describe('DtvController', () => {
  let controller: DtvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DtvController],
    }).compile();

    controller = module.get<DtvController>(DtvController);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });
});
