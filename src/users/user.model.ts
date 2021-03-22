import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Deck, deckSchema } from 'src/decks/deck.model';

@Schema()
export class User extends mongoose.Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [deckSchema] })
  sheet: Deck;
}

export const userSchema = SchemaFactory.createForClass(User);