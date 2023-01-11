import { Controller, Request, Post, UseGuards, Get,Response } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req: any) {
    console.log(req.user);
    // return req.user;
    return this.authService.login(req.user);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
