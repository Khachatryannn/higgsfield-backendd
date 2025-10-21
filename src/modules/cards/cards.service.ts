import { Injectable } from '@nestjs/common';
import { db } from 'src/database/database.provider';
import { CardsRepository } from 'src/repositories/card/card.repository';
import { communityGridData } from 'src/seeds/cards.seeder';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
  
  constructor(private readonly cardsRepository: CardsRepository) {}

  async addAllCards() {
    for (const card of communityGridData) {
      const cardDto: CreateCardDto = {
        id: card.id,
        videoImageSrc: card.videoImageSrc,
        autoplay: card.autoplay,
      };
      await this.cardsRepository.insertCard(cardDto);
    }
    return { message: '✅ All cards added successfully' };
  }

  async findAll() {
    return this.cardsRepository.findAll();
  }

  async create(createCardDto: CreateCardDto) {
    return this.cardsRepository.insertCard(createCardDto);
  }

  async remove(id: number) {
     this.cardsRepository.deleteCard(id);
     return { message: '✅ Card deleted successfully' };
  }
}
