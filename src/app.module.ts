import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SheetsModule } from './sheets/sheets.module';
import { DecksModule } from './decks/decks.module';
import { CategorysModule } from './categorys/categorys.module';

@Module({
  imports: [
    SheetsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/revision'),
    DecksModule,
    CategorysModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}