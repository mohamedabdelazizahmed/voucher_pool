import { Injectable } from '@nestjs/common';
import * as voucher_codes from  'voucher-code-generator';
import { VerifyVoucherDto } from './dto/verify-voucher.dto';
import { CreateVoucherDto } from './dto/create-voucher.dto';

import { VoucherCodes } from './entities/VoucherCodes.entity';
import { IsNull, Repository,DataSource,Not } from 'typeorm';
import { InjectRepository  } from '@nestjs/typeorm';
import { Recipient } from 'src/recipient/entities/Recipient.entity';
import * as moment from 'moment';
import {  Offer } from 'src/offer/entities/Offer.entity';



@Injectable()
export class VoucherService {
    constructor(
        @InjectRepository(VoucherCodes)
        private voucherCodesRepository: Repository<VoucherCodes>,
        private dataSource: DataSource

      ) {}
    

      getAllVouchers()
    {

         return this.voucherCodesRepository.find({
            relations:{
                recipient:true,
            },
         });
    }
    async getVoucherStatistics(){
        let totalVouchers =  await this.voucherCodesRepository
            .createQueryBuilder('VoucherCodes')
            .select('COUNT(*)', 'totalVouchers')  
            .getCount()as number;
        let usedVouchers = await this.voucherCodesRepository
            .createQueryBuilder('VoucherCodes')
            .where("VoucherCodes.used_on IS NOT NULL")
            .getCount() as number ;
        
        let unusedVouchers = totalVouchers - usedVouchers;

        return {totalVouchers,usedVouchers ,unusedVouchers};
    }

    public  generateCode()
    {
        return voucher_codes.generate({
            length: 8,
            count: 1
        });
    }

    async createVoucherCode(createVoucherDto:CreateVoucherDto){
        let recipients  = await this.dataSource.getRepository(Recipient)
                        .createQueryBuilder("recipients")
                        .select("recipients.id")
                        .getMany();
        let getOffer = await this.dataSource.getRepository(Offer).
        findOne({
            where:{
                id:createVoucherDto.offer_id
            }
        });

        recipients.map(async recipient =>{
            let voucher = new VoucherCodes();
            voucher.recipient = recipient;
            voucher.expire_date = createVoucherDto.expire_date;
            voucher.offer = getOffer;
            voucher.code = this.generateCode()[0];
            voucher.created_at = new Date();
            voucher.updated_at = new Date();
            let result  = await this.voucherCodesRepository.save(voucher);
        });
        return true;
    }

    async verifyVoucherCode(verifyVoucherDto:VerifyVoucherDto){
        let voucher = await this.voucherCodesRepository.findOne({
            relations:{
                offer:true,
                recipient:true
            },
            where:{
                used_on: IsNull(),
                code:verifyVoucherDto.code,
                recipient:{
                    email:verifyVoucherDto.email
                }
            }
        
            
        });

        if (voucher != null) {
                let res =  await this.voucherCodesRepository.save({
                    id: voucher.id,
                    code:voucher.code,
                    used_on:moment().format("MM-DD-YYYY").toString(),
                    expire_date:voucher.expire_date
                });
                return res;
        }
        
    }










}
