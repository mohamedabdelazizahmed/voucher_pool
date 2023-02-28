import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { ApiAcceptedResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateRecipientDto } from './dto/create-recipient.dto';
import { UpdateRecipientDto } from './dto/update-recipient.dto';
import { Recipient } from './entities/Recipient.entity';
import { RecipientService } from './recipient.service';

@Controller('recipient')
export class RecipientController {

    constructor(private recipientService: RecipientService) { }

    @ApiOkResponse({ description: ' list of Recipients as Response.', type: [Recipient] })
    @ApiBadRequestResponse({ description: 'Cannot  show the list Recipients' })
    @Get()
    getUsers() {
        return this.recipientService.get();
    }
    
    @ApiCreatedResponse({
        description: 'Create Recipient Object as Response.',
        type: Recipient,
      })
      @ApiBadRequestResponse({ description: 'Cannot add new Recipient in database' })
    @Post()
    store(@Body() createRecipientDto: CreateRecipientDto) {
        return this.recipientService.create(createRecipientDto);
    }



    @ApiAcceptedResponse({
        description: 'update specific Recipient Object by RecipientId as Response.',
        type: Recipient,
      })
      @ApiBadRequestResponse({
        description: 'Cannot update specific Offer in database',
      })
    
    @Patch('/:recipientId')
    update(
        @Body() updateRecipientDto: UpdateRecipientDto,
        @Param('recipientId', ParseIntPipe) recipientId: number,
    ) {
        return this.recipientService.update(updateRecipientDto, recipientId);
    }

    @Get('/:recipientId')
    getRecipient(@Param('recipientId', ParseIntPipe) recipientId: number) {
        return this.recipientService.show(recipientId);
    }

    @Delete('/:recipientId')
    deleteUser(@Param('recipientId', ParseIntPipe) recipientId: number) {
        return this.recipientService.delete(recipientId);
    }

}
