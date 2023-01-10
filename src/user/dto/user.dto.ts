import { IsEmail, IsString,IsNotEmpty } from "class-validator";

export class CreateUser {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
}
export class UpdateUser {
    @IsString()
    username: string;
    @IsString()
    password: string;

}