import { Module } from '@nestjs/common';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './entities/Offer.entity';


@Module({
    controllers: [OfferController],
    providers: [OfferService],
    exports: [OfferService],
    imports: [TypeOrmModule.forFeature([Offer])],
  })
export class OfferModule {}
