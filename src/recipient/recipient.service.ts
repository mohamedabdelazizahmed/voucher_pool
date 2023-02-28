import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipient } from './entities/Recipient.entity';
import { IsNull, Repository } from 'typeorm';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';

@Injectable()
export class RecipientService {
    constructor(
        @InjectRepository(Recipient)
        private recipientRepository: Repository<Recipient>,
    ) {}
    get(): Promise<Recipient[]> {
        return this.recipientRepository.find();
      }
    
      create(createRecipientDto: CreateRecipientDto) {
        return this.recipientRepository.save(createRecipientDto);
      }
    
      update(updateRecipientDto: UpdateRecipientDto, recipientId: number) {
        return this.recipientRepository.update(recipientId, updateRecipientDto);
      }
    
      show(id: number) {
        return this.recipientRepository.findOne({ where: { id } });
      }
    
      findByEmail(email: string) {
        return this.recipientRepository.findOne({ where: { email } });
      }
    
      delete(recipientId: number) {
        return this.recipientRepository.delete(recipientId);
      }
}
