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
    @Get(':id')
    getPostById(@Param('id') id: string) {
        return this.postService.getPostById(Number(id));
    }

    @Post()
    async createPost(@Body() post: CreatePost) {
        return this.postService.createPost(post);
    }

    @Put(':id')
    async replacePost(@Param('id') id: string, @Body() post: UpdatePost) {
        return this.postService.replacePost(Number(id), post);
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string) {
        await this.postService.deletePost(Number(id));
        return true;
    }
}
