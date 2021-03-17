import { Body, Controller, Get, Post } from '@nestjs/common';
import { SheetsService } from './sheets.service';

@Controller('sheets')
export class SheetsController {
  constructor(private readonly sheetsService: SheetsService) {}

  @Post()
  async addSheet(
    @Body('question') sheetQuestion: string,
    @Body('response') sheetResponse: string,
  ) {
    const generatedId = await this.sheetsService.insertSheet(
      sheetQuestion,
      sheetResponse,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllsheets() {
    const sheets = await this.sheetsService.getSheets();
    return sheets;
  }
}
