import { Injectable } from '@nestjs/common';

@Injectable()
export class SheetsService {
    getSheet(): any[] {
        return ["sheets !!!!!!!", "kamel", 25];
    }
}
