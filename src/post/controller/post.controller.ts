import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePost, UpdatePost } from '../dto/post.dto';
import { PostService } from '../service/post.service';

@Controller('posts')
export class PostController {
    constructor(
        private readonly postService: PostService
    ) { }
    @Get()
    getAllPost() {
        return this.postService.getAllPosts();
    }
    @Get(':content')
    getPostById(@Param('content') content: string) {
        return this.postService.getPostById(content);
    }

    @Post()
    async createPost(@Body() post: CreatePost) {
        return this.postService.create(post);
    }

    @Put(':content')
    async replacePost(@Param('content') content: string, @Body() post: UpdatePost) {
        return this.postService.replacePost(content, post);
    }

    @Delete(':content')
    async deletePost(@Param('content') content: string) {
        await this.postService.deletePost(content);
        return true;
    }
}
