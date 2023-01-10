import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './service/local.strategy';
import { AuthController } from './controller/auth.controller';

@Module({
  controllers : [AuthController],
  imports: [UserModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
