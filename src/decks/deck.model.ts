import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Sheet } from 'src/sheets/sheet.model';

export type DeckDocument = Deck & Document;

@Schema()
export class Deck {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sheet' }] })
  sheet: Sheet[];
}

export const DeckSchema = SchemaFactory.createForClass(Deck);
