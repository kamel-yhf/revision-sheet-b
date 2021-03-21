import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { categorySchema } from './category.model';
import { CategorysController } from './categorys.controller';
import { CategorysService } from './categorys.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: categorySchema }]),
  ],
  controllers: [CategorysController],
  providers: [CategorysService],
})
export class CategorysModule {}
