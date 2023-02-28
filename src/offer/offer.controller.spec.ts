import { Test, TestingModule } from '@nestjs/testing';
import { Request, Response } from 'express';
import { OfferController } from './offer.controller';

describe('OfferController', () => {
  let controller: OfferController;
  const requestMock = {} as unknown as Request;
  const responseMock = {
    status:jest.fn((x)=>{
      send:jest.fn((y)=>y)
    }),
    send:jest.fn((x)=>x)
  } as unknown as Response;
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
      controller.index();
      expect(responseMock.status).toHaveBeenCalledWith(200);
    });
  });

});


