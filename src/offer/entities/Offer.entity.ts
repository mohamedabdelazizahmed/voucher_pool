import { ApiProperty } from '@nestjs/swagger';
import { VoucherCodes } from 'src/voucher/entities/VoucherCodes.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,OneToMany } from 'typeorm';

@Entity("Offers") 
export class Offer {
    @ApiProperty({description:"Primary Key as Offer Id ", example:1})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description:"The Name for Offer  ", example:"Offer One "})
    @Column()
    name: string;

    @ApiProperty({description:"The discount for Offer  ", example:"10"})
    @Column()
    discount: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @OneToMany(() => VoucherCodes, (voucherCodes) => voucherCodes.offer)
    voucherCodes: VoucherCodes[]

}