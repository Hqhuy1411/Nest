import { Body, Controller, Get,Post,Render,Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // MVC -> render ra 
  @Get('index')
  @Render('index')
  root() {
    return { massage: 'Hello Huy!' };
  }


  @Get('todo')
  @Render('todo')
  todo(){
    return {todos : this.appService.getAllToDo()}
                
  }

  @Post('todo')
  @Redirect('todo')
  todoPost(@Body() text :String){
    console.log(text)
      return this.appService.saveToDo(text);
  }
}
