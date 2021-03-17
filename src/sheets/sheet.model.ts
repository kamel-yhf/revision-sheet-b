import * as mongoose from 'mongoose';

export const sheetSchema = new mongoose.Schema({
  question: { type: String, required: true },
  response: { type: String, required: true },
});

export interface Sheet extends mongoose.Document {
  id: string;
  question: string;
  response: string;
}
