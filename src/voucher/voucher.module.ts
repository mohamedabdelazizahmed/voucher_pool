import { Module } from '@nestjs/common';
import { VoucherCodes } from './entities/VoucherCodes.entity';
import { VoucherService } from './voucher.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoucherController } from './voucher.controller';


@Module({
    controllers: [VoucherController],
    providers: [VoucherService],
    exports: [VoucherService],
    imports: [TypeOrmModule.forFeature([VoucherCodes])],
})
export class VoucherModule {}
