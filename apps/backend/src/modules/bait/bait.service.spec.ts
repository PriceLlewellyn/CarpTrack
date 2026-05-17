import { Test, TestingModule } from '@nestjs/testing';
import { BaitService } from './bait.service';

describe('BaitService', () => {
  let service: BaitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaitService],
    }).compile();

    service = module.get<BaitService>(BaitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
