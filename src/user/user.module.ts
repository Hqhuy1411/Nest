import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchemas } from './schemas/user.schemas';

@Module({
  imports : [MongooseModule.forFeature([{name:User.name,schema:UserSchemas}])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
