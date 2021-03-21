import { Controller, Get, Param } from '@nestjs/common';
import { CategorysService } from './categorys.service';

@Controller('categorys')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) {}

  @Get(':id')
  async getAllCategory(@Param('id') categoryId: string){
    const category = await this.categorysService.getCategorys(categoryId);
    return category;
  }
}
