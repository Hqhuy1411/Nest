import { Body, Controller, Get, Param, Post,Render } from '@nestjs/common';
import { CreateUser } from '../dto/user.dto';
import { UserService } from '../service/user.service';
import {ToObejct} from 'src/util/mongoose'
@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}
    // MVC -> render ra list

    @Get('list')
    @Render('user/list')
    getAllUser2(){
        const toObject = new ToObejct();
        // return this.userService.getAllUsers()
        //          .then((result) =>  result ? { users: result } : [] );
        return this.userService.getAllUsers()
                    .then((result) => result ? {users : toObject.mutipleMongoosetoObject(result)} : []);
    }

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

