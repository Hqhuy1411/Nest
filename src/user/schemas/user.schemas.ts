import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose'; 'mongoose';

export type UserDocument = HydratedDocument<User>

@Schema()
export class User{
    @Prop()
    email : string;

    @Prop()
    username : string;

    @Prop()
    password : string;
}

export const UserSchemas = SchemaFactory.createForClass(User);