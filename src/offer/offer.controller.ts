import {
  Get,
  Controller,
  Render,
  Param,
  Patch,
  Body,
  Post,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import {
  ApiAcceptedResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
import { Offer } from './entities/Offer.entity';
import { OfferService } from './offer.service';

@Controller('offers')
export class OfferController {
  constructor(private offerService: OfferService) {}

  @ApiOkResponse({ description: ' list of Offers as Response.', type: [Offer] })
  @ApiBadRequestResponse({ description: 'Cannot  show the list offers' })
  @Get()
  index() {
    return this.offerService.get();
  }

  @ApiCreatedResponse({
    description: 'Create Offer Object as Response.',
    type: Offer,
  })
  @ApiBadRequestResponse({ description: 'Cannot add new offer in database' })
  @Post()
  store(@Body() createUserDto: CreateOfferDto) {
    return this.offerService.create(createUserDto);
  }

  @ApiAcceptedResponse({
    description: 'update specific Offer Object by OfferId as Response.',
    type: Offer,
  })
  @ApiBadRequestResponse({
    description: 'Cannot update specific Offer in database',
  })
  @Patch('/:offerId')
  update(
    @Body() updateUserDto: UpdateOfferDto,
    @Param('offerId', ParseIntPipe) offerId: number,
  ) {
    return this.offerService.update(updateUserDto, offerId);
  }

  @ApiAcceptedResponse({
    description: 'show specific Offer Object by OfferId as Response.',
    type: Offer,
  })
  @ApiBadRequestResponse({
    description: 'Cannot show specific Offer in database',
  })
  @Get('/:offerId')
  getOffer(@Param('offerId', ParseIntPipe) offerId: number) {
    return this.offerService.show(offerId);
  }

  @ApiAcceptedResponse({
    description: 'Delete specific Offer Object by OfferId as Response.',
  })
  @ApiBadRequestResponse({
    description: 'Cannot delete specific Offer in database',
  })
  @Delete('/:offerId')
  deleteOffer(@Param('offerId', ParseIntPipe) offerId: number) {
    return this.offerService.delete(offerId);
  }
}
