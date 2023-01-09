import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePost, UpdatePost } from '../dto/post.dto';
import { Post } from '../dto/post.interface';

@Injectable()
export class PostService {
    private lastPostId = 0;
    private posts: Post[] = [];

    getAllPosts() {
        return this.posts;
    }

    getPostById(id: number) {
        const post = this.posts.find(post => post.id === id)
        if(post){
            return post;
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND); 
    }
    // const array1 = [5, 12, 8, 130, 44];

    // const found = array1.find(element => element > 10);
    
    // console.log(found);
    // // expected output: 12       -> Lay phan tu dau tien


    replacePost(id: number, post: UpdatePost) {
        const index = this.posts.findIndex(post => post.id === id)
        if(index > -1){
            this.posts[index] = post;
            return post;
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND); 
    }

    createPost(post: CreatePost) {
        const newPost={
            id : ++ this.lastPostId,
            ...post
        }
        this.posts.push(newPost);
    }

    deletePost(id: number) {
        const index = this.posts.findIndex((post) => post.id === id);
        if(index > -1){
            this.posts.splice(index,1);
            return "Done";
        }
        throw new HttpException('Post not found', HttpStatus.NOT_FOUND); 
    }

}
