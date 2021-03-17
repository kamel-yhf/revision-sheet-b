import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SheetsModule } from './sheets/sheets.module';

@Module({
  imports: [
    SheetsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/revision'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}