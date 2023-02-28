import { Module } from '@nestjs/common';
import { Recipient } from './entities/Recipient.entity';
import { RecipientController } from './recipient.controller';
import { RecipientService } from './recipient.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [RecipientController],
  providers: [RecipientService],

  exports: [RecipientService],
  imports: [TypeOrmModule.forFeature([Recipient])],
})
export class RecipientModule {}
