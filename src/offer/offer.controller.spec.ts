import { Test, TestingModule } from '@nestjs/testing';
import { OfferController } from './offer.controller';

describe('OfferController', () => {
  let controller: OfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferController],
    }).compile();

    controller = module.get<OfferController>(OfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('index' ,()=>{
    it('should return status 200', ()=>{
      controller.index()
    });
  });

});


