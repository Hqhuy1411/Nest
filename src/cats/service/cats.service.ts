import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from '../cats.interface';
import { CreateCatDto, UpdateCatDto } from '../dto/cats.dto';

@Injectable()
export class CatsService {
  private lastcatsId = 0;
  private cats: Cat[] = [];

  getAllcatss() {
    return this.cats;
  }

  getcatsById(id: number) {
    const cats = this.cats.find((cat) => cat.id === id);
    if (cats) {
      return cats;
    }
    throw new HttpException('cats not found', HttpStatus.NOT_FOUND);
  }

  replacecats(id: number, cat: UpdateCatDto) {
    const catsIndex = this.cats.findIndex((cat) => cat.id === id);
    if (catsIndex > -1) {
      this.cats[catsIndex] = <Cat> cat;
      return cat;
    }
    throw new HttpException('cats not found', HttpStatus.NOT_FOUND);
  }

  createcats(cats: CreateCatDto) {
    const newcats = {
      id: ++this.lastcatsId,
      ...cats,
    };
    this.cats.push(<Cat>newcats);
    return newcats;
  }

  deletecats(id: number) {
    const catsIndex = this.cats.findIndex((cat) => cat.id === id);
    if (catsIndex > -1) {
      this.cats.splice(catsIndex, 1);
    } else {
      throw new HttpException('cats not found', HttpStatus.NOT_FOUND);
    }
  }
}