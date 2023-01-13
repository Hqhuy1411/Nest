import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './cats/middleware/logger.middleware';

@Module({
  imports: [CatsModule, PostModule,MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'), UserModule, AuthModule],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)   // .apply(logger)
     // .forRoutes('cats');  -> ALL or forRoutes({ path: 'cats', method: RequestMethod.ALL }); or   .forRoutes(CatsController);
      .forRoutes({path :'cats', method: RequestMethod.GET});
  }
}