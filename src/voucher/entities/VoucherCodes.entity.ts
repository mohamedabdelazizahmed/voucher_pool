import { Offer } from 'src/offer/entities/Offer.entity';
import { Recipient } from 'src/recipient/entities/Recipient.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,ManyToOne,JoinTable } from 'typeorm';

@Entity()
export class VoucherCodes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    code: string;

    @Column()
    expire_date: string;

    
    @Column({ nullable: true })
    used_on: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


    @ManyToOne(() => Recipient, (recipient) => recipient.voucherCodes)
    @JoinTable()
    recipient: Recipient


    @ManyToOne(() => Offer, (offer) => offer.voucherCodes)
    @JoinTable()
    offer: Offer

    //   @Column({ default: true })
    //   isActive: boolean;
}