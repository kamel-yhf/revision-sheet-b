import { Controller, Get, Param } from '@nestjs/common';
import { CategorysService } from './categorys.service';

@Controller('categorys')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) {}

  
  @Get()
  async getAllCategorys() {
    const categorys = await this.categorysService.getAllCategorys();
    return categorys;
  }

  @Get(':id')
  async getCategory(@Param('id') categoryId: string){
    const category = await this.categorysService.getCategory(categoryId);
    return category;
  }
}
