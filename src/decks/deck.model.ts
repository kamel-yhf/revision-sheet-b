import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Sheet, sheetSchema } from 'src/sheets/sheet.model';

@Schema()
export class Deck extends mongoose.Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [sheetSchema] })
  sheet: Sheet[];
}

export const deckSchema = SchemaFactory.createForClass(Deck);
