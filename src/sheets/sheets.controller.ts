import { Controller, Get } from '@nestjs/common';
import { SheetsService } from './sheets.service';

@Controller('sheets')
export class SheetsController {
    constructor(private readonly sheetsService: SheetsService) {}
    
    @Get()
    getSheet(): any[]{
        return this.sheetsService.getSheet();
    }
}
