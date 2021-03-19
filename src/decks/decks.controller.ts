import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Sheet } from 'src/sheets/sheet.model';
import { DecksService } from './decks.service';

@Controller('decks')
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  @Post()
  async addDeck(
    @Body('name') deckName: string,
    @Body('sheet') deckSheet: Sheet,
  ) {
    const generatedId = await this.decksService.insertDeck(deckName, deckSheet);
    return { id: generatedId };
  }

  @Get()
  async getAlldecks() {
    const decks = await this.decksService.getDecks();
    return decks;
  }

  @Get(':id')
  async getOneDeck(@Param('id') deckId: string) {
    const oneDeck = this.decksService.getOneDeck(deckId);
    return oneDeck;
  }
}
