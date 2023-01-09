import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/controller/cats.controller';
import { CatsService } from './cats/service/cats.service';
import { PostController } from './post/controller/post.controller';
import { PostService } from './post/service/post.service';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CatsModule, PostModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest')],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
