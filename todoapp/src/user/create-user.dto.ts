import { IsString, IsInt } from 'class-validator';
export class createUserDto{
    @IsInt()
    user_id: number;
    @IsString()
    user_username: string;
    @IsString()
    user_password: string;
}