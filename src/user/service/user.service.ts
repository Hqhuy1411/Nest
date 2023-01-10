
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUser } from '../dto/user.dto';
import { UserDocument,User } from '../schemas/user.schemas';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel : Model<UserDocument>) {}

    async create(createUser: CreateUser): Promise<User> {
        const createdCat = new this.userModel(createUser);
        return createdCat.save();
    }

    getAllUsers() {
        return this.userModel.find({});
    }
}
