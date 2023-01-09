import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { response } from 'express';
import { CreateCatDto, UpdateCatDto } from '../dto/cats.dto';
import { CatsService } from '../service/cats.service';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService) {}

    @Get()
    getAllcat() {
      return this.catService.getAllcatss();
    }
    // .. cats/{id}
    @Get(':id')
    getcatById(@Param('id') id: string) {
      return this.catService.getcatsById(Number(id));
    }
  
    @Post()
    async createcat(@Body() cat: CreateCatDto) {
      return this.catService.createcats(cat);
    }
  
    @Put(':id')
    async replacecat(@Param('id') id: string, @Body() cat: UpdateCatDto) {
      return this.catService.replacecats(Number(id), cat);
    }
  
    @Delete(':id')
    async deletecat(@Param('id') id: string) {
      await this.catService.deletecats(Number(id));
      return true;
    }


    // @cat()
    // async create(@Body() createCatDto: CreateCatDto) {
    //     return 'This action adds a new cat';
    // }

    // @Get()
    // findAll(): string {
    //     return 'This action returns all cats';
    // }
    // // Get/ cats/{id}
    // @Get(':id')
    // // findOne(@Param() params): string {
    // //     console.log(params.id);
    // //     return `This action returns a #${params.id} cat`;
    // // }
    // @Get(':id/:name')
    // findOne(@Param('id') id: string): string {
    //     return `This action returns a #${id} cat`;
    // }

}
