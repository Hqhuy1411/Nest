import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUser } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService){}

    @Get()
    getAllUser(){
        return this.userService.getAllUsers();
    }
    @Post()
    async createPost(@Body() user: CreateUser) {
        return this.userService.create(user);
    }

}
