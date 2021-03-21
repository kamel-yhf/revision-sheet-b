import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './category.model';

@Injectable()
export class CategorysService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>,
  ) {}

  //get category
  async getCategorys(categoryId: string) {
    const category = await this.categoryModel.findById(categoryId);
    return {
      id: category.id,
      easy: category.easy,
      medium: category.medium,
      hard: category.hard,
    };
  }
}
