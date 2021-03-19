import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { deckSchema } from './deck.model';
import { DecksController } from './decks.controller';
import { DecksService } from './decks.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Deck', schema: deckSchema }])],
  controllers: [DecksController],
  providers: [DecksService],
})
export class DecksModule {}
