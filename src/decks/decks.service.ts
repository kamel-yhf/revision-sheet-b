import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sheet } from 'src/sheets/sheet.model';
import { Deck } from './deck.model';

@Injectable()
export class DecksService {
  constructor(@InjectModel('Deck') private readonly deckModel: Model<Deck>) {}

  //cerate decks
  async insertDeck(name: string, sheet: Sheet) {
    const newDeck = new this.deckModel({
      name: name,
      sheet: sheet,
    });
    const result = await newDeck.save();
    return result.id as string;
  }

  //get all decks
  async getDecks() {
    const decks = await this.deckModel.find().exec();
    return decks;
  }

  //get on deck
  async getOneDeck(deckId: string) {
    const deck = await this.deckModel.findById(deckId);
    return {
      id: deck.id,
      name: deck.name,
      sheet: deck.sheet,
    };
  }

  //update deck
  async updateDeck(deckId: string, name: string, sheet: Sheet) {
    const updateDeck = await this.findDeck(deckId);
    if (name) {
      updateDeck.name = name;
    }
    if (sheet) {
      updateDeck.sheet = sheet;
    }
    updateDeck.save();
  }

  //delete deck
  async deleteDeck(deckId: string) {
    await this.deckModel.findByIdAndDelete({ _id: deckId }).exec();
  }

  //find deck
  private async findDeck(id: string): Promise<Deck> {
    let deck;
    try {
      deck = await this.deckModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find deck.');
    }
    if (!deck) {
      throw new NotFoundException('Could not find deck.');
    }
    return deck;
  }
}
