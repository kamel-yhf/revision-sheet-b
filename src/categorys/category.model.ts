import * as mongoose from 'mongoose';

export const categorySchema = new mongoose.Schema({
  easy: { type: String },
  medium: { type: String },
  hard: { type: String },
});

export interface Category extends mongoose.Document {
  id: string;
  easy: string;
  medium: string;
  hard: string;
}
