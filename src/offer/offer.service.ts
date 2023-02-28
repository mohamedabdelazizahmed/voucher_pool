import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

import { Offer } from './entities/Offer.entity';


@Injectable()
export class OfferService {
    constructor( @InjectRepository(Offer)
    private offersRepository: Repository<Offer>) {
        
    }
    get(): Promise<Offer[]> {
        return this.offersRepository.find();
    }

    create(createOfferDto:CreateOfferDto){
        return this.offersRepository.save(createOfferDto);
    }


    update(updateUserDto: UpdateOfferDto, offerId: number) {
        return this.offersRepository.update(offerId, updateUserDto);
    }
    
    show(id: number) {
        return this.offersRepository.findOne({ where: { id } });
    }
    
    findByName(name: string) {
        return this.offersRepository.findOne({ where: { name } });
    }
    
    delete(offerId: number) {
        return this.offersRepository.delete(offerId);
    }
}
