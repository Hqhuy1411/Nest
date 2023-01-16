import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private todos :String[] = []

  getHello(): string {
    return 'Hello World!';
  }

  getAllToDo(){
    return this.todos;
  }

  saveToDo(text){
      console.log(typeof text)
      this.todos.push(text);
  }
}
