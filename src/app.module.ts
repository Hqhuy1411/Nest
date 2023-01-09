import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/controller/cats.controller';
import { CatsService } from './cats/service/cats.service';
import { PostController } from './post/controller/post.controller';
import { PostService } from './post/service/post.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [CatsModule, PostModule],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
