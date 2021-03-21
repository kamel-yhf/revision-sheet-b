import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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

  @Patch(':id')
  async updateDeck(
    @Param('id') deckId: string,
    @Body('name') deckName: string,
    @Body('sheet') deckSheet: Sheet,
  ) {
    await this.decksService.updateDeck(deckId, deckName, deckSheet);
    return 'update deck ok';
  }

  @Delete(':id')
  async removeDeck(@Param('id') deckId: string) {
    await this.decksService.deleteDeck(deckId);
    return 'deck delete';
  }
}
