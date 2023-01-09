import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePost, UpdatePost } from '../dto/post.dto';
import { PostDocument, Post } from '../schemas/post.schemas';

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) { }

    async create(createPost: CreatePost): Promise<Post> {
        const createdCat = new this.postModel(createPost);
        return createdCat.save();
    }

    getAllPosts() {
        return this.postModel.find({});
    }
    getPostById(content : string){
        return this.postModel.find({content});
    }

    replacePost(content : string, post: UpdatePost){
        return this.postModel.updateOne({content}, {$set : {...post}});
    }
     deletePost(content : string){
        return this.postModel.deleteOne({content});
    }

    /* Chua ket noi database */

    // private lastPostId = 0;
    // private posts: Post[] = [];

    // getAllPosts() {
    //     return this.posts;
    // }

    // getPostById(id: number) {
    //     const post = this.posts.find(post => post.id === id)
    //     if(post){
    //         return post;
    //     }
    //     throw new HttpException('Post not found', HttpStatus.NOT_FOUND); 
    // }
    // const array1 = [5, 12, 8, 130, 44];

    // const found = array1.find(element => element > 10);

    // console.log(found);
    // // expected output: 12       -> Lay phan tu dau tien


    // replacePost(id: number, post: UpdatePost) {
    //     const index = this.posts.findIndex(post => post.id === id)
    //     if(index > -1){
    //         this.posts[index] = post;
    //         return post;
    //     }
    //     throw new HttpException('Post not found', HttpStatus.NOT_FOUND); 
    // }

    // createPost(post: CreatePost) {
    //     const newPost={
    //         id : ++ this.lastPostId,
    //         ...post
    //     }
    //     this.posts.push(newPost);
    // }

    // deletePost(id: number) {
    //     const index = this.posts.findIndex((post) => post.id === id);
    //     if(index > -1){
    //         this.posts.splice(index,1);
    //         return "Done";
    //     }
    //     throw new HttpException('Post not found', HttpStatus.NOT_FOUND); 
    // }

}
