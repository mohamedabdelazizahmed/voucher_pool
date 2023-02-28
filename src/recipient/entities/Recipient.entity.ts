import { ApiProperty } from '@nestjs/swagger';
import { VoucherCodes } from 'src/voucher/entities/VoucherCodes.entity';
import { Entity, Column,
        PrimaryGeneratedColumn, CreateDateColumn,
        UpdateDateColumn,OneToMany } from 'typeorm';

@Entity("Recipients")
export class Recipient {
    @ApiProperty({description:"Primary Key as Recipient Id ", example:1})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description:"The Name for Recipient  ", example:"Mohamed"})
    @Column()
    name: string;

    @ApiProperty({description:"The Email for Recipient ", example:"Mohamed@test.com"})
    @Column({unique:true})
    email: string;

    @ApiProperty({description:"The create Date for Recipient ", example:new Date()})
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;


    @ApiProperty({description:"The update Date for Recipient ", example:new Date()})
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @OneToMany(() => VoucherCodes, (voucherCodes) => voucherCodes.recipient)
    voucherCodes: VoucherCodes[]

    
}