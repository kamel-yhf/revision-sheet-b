import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { sheetSchema } from './sheet.model';
import { SheetsController } from './sheets.controller';
import { SheetsService } from './sheets.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sheet', schema: sheetSchema }]),
  ],
  controllers: [SheetsController],
  providers: [SheetsService],
})
export class SheetsModule {}
