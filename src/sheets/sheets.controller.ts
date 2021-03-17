import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get(':id')
  getOnesheet(@Param('id') sheetId: string) {
    const oneSheet = this.sheetsService.getOneSheet(sheetId);
    return oneSheet;
  }

  @Delete(':id')
  async removeSheet(@Param('id') sheetId: string) {
    await this.sheetsService.deleteSheet(sheetId);
    return "sheet delete !";
  }
}
