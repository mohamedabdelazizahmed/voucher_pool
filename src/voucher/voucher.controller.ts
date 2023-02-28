import { Post ,Get,Body} from '@nestjs/common';

import { Controller } from '@nestjs/common';
import { ApiAcceptedResponse ,ApiBadRequestResponse} from '@nestjs/swagger';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { VerifyVoucherDto } from './dto/verify-voucher.dto';
import { VoucherCodes } from './entities/VoucherCodes.entity';
import { VoucherService } from './voucher.service';

@Controller('voucher')
export class VoucherController {
    constructor(private voucherService:VoucherService){}
    @ApiAcceptedResponse({
        description: 'Get statics  Voucher Code  for Recipient and  offer as Response.',
    })
    @ApiBadRequestResponse({
        description: 'Cannot create  Voucher Code for  Offer and  Recipient in database',
      })
    @Get()
    index(){
        return this.voucherService.getVoucherStatistics();
    }
    @ApiAcceptedResponse({
        description: 'Get all Voucher Code  for Recipient and  offer as Response.',
    })
    @ApiBadRequestResponse({
        description: 'Cannot create  Voucher Code for  Offer and  Recipient in database',
      })
    getAllVouchers(){
        return this.voucherService.getAllVouchers();
     }
        

     @ApiAcceptedResponse({
        description: 'create Voucher Code  for Recipient and  offer as Response.',
    })
    @ApiBadRequestResponse({
        description: 'Cannot create  Voucher Code for  Offer and  Recipient in database',
      })
    @Post('create')
    create(@Body()createVoucherDto:CreateVoucherDto){
         this.voucherService.createVoucherCode(createVoucherDto);
         return {message : "Voucher Code for Offer and Recipient"}
    }



    
    @ApiAcceptedResponse({
        description: 'Generate Code for  Voucher Code  as Response.',
    })
    @ApiBadRequestResponse({
        description: 'Cannot Generate Voucher Code in database',
      })
    @Get('generate/code')
    generate(){
        return this.voucherService.generateCode();
    }


    @ApiAcceptedResponse({
        description: 'Verify By Email & Code Voucher Code  as Response.',
        type: VoucherCodes,
    })
    @ApiBadRequestResponse({
        description: 'Cannot Verify Voucher Code in database',
      })
    @Post('verify')
    async verify(@Body()verifyVoucherDto:VerifyVoucherDto){
        return await this.voucherService.verifyVoucherCode(verifyVoucherDto);
    }
}
 