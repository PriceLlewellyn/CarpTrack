import { Test, TestingModule } from '@nestjs/testing';
import { BaitController } from './bait.controller';
import { BaitService } from './bait.service';

describe('BaitController', () => {
  let controller: BaitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaitController],
      providers: [BaitService],
    }).compile();

    controller = module.get<BaitController>(BaitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
