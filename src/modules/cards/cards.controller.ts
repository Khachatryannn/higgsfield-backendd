import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { log } from 'console';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post("/create")
  create(@Body() createCardDto) {
    return this.cardsService.create(createCardDto);
  }

  @Get('/add-all-cards')
  createAllCards() {
    return this.cardsService.addAllCards();
  }

  @Get('/get-all')
  async findAll() {
    return await this.cardsService.findAll();
  }

  @Delete(":id")
  remove(@Param('id') id: string) {
    return this.cardsService.remove(+id);
  }
}
