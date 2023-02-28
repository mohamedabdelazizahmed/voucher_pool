import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VoucherController } from './voucher/voucher.controller';
import { VoucherService } from './voucher/voucher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipient } from './recipient/entities/Recipient.entity';
import { VoucherCodes } from './voucher/entities/VoucherCodes.entity';
import { Offer } from './offer/entities/Offer.entity';
import { OfferController } from './offer/offer.controller';
import { OfferService } from './offer/offer.service';
import { VoucherModule } from './voucher/voucher.module';
import { OfferModule } from './offer/offer.module';
import { RecipientModule } from './recipient/recipient.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'voucher_pool',
      entities: [Recipient,VoucherCodes,Offer],
      synchronize: false,
    }),
    VoucherModule,
    OfferModule,
    RecipientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
