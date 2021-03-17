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

  //get sheets
  async getSheets() {
    const sheets = await this.sheetModel.find().exec();
    return sheets.map((sh) => ({
      id: sh.id,
      question: sh.question,
      response: sh.response,
    }));
  }

  //get one sheet
  async getOneSheet(sheetId: string) {
    const sheet = await this.sheetModel.findById(sheetId);
    return {
      id: sheet.id,
      question: sheet.question,
      response: sheet.response,
    };
  }
}
