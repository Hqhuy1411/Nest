import { Body, Controller, Get, Param, Post,Render } from '@nestjs/common';
import { CreateUser } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}

    @Get('list')
    @Render('user/list')
    getAllUser2(){
        return this.userService.getAllUsers()
                 .then((result) =>  result ? { users: result } : [] );
    }
    // MVC -> render ra list
    @Get()
    getAllUser(){
        return this.userService.getAllUsers();
    }




    @Post()
    async createPost(@Body() user: CreateUser) {
        return this.userService.create(user);
    }
    @Get(':email')
    getPostById(@Param('email') email: string) {
        return this.userService.findOneEmail(email);
    }

}
