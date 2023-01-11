import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './service/auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './controller/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  controllers : [AuthController],
  imports: [UserModule, PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),],
  providers: [AuthService, LocalStrategy,JwtStrategy],
})
export class AuthModule {}
