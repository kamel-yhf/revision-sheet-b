import * as mongoose from 'mongoose';
const sheetSchema = mongoose.model('Sheet').schema;

export const deckSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sheets: { type: [sheetSchema], required: true}
});

export interface Deck extends mongoose.Document {
    id: string,
    name: string,
    sheet: [],
}
