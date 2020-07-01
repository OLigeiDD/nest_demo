import { Test, TestingModule } from '@nestjs/testing';
import { XiaomiDbService } from './xiaomi-db.service';

describe('XiaomiDbService', () => {
  let service: XiaomiDbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XiaomiDbService],
    }).compile();

    service = module.get<XiaomiDbService>(XiaomiDbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
