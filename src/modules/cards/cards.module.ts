import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { CardsRepository } from 'src/repositories/card/card.repository';

@Module({
  controllers: [CardsController],
  providers: [CardsService, CardsRepository],
})
export class CardsModule {}
