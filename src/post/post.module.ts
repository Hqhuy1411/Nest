import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostController } from './controller/post.controller';
import { PostSchema,Post } from './schemas/post.schemas';
import { PostService } from './service/post.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
    controllers : [PostController],
    providers : [PostService]

})
export class PostModule {}
