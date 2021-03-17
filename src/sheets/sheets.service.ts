import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Sheet } from './sheet.model';

@Injectable()
export class SheetsService {
  constructor(
    @InjectModel('Sheet') private readonly sheetModel: Model<Sheet>,
  ) {}

  //create sheet
  async insertSheet(q: string, r: string) {
    const newSheet = new this.sheetModel({
      question: q,
      response: r,
    });
    const result = await newSheet.save();
    return result.id as string;
  }

}
