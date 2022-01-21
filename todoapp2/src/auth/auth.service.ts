import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDTO } from './dto/auth.dto';
import { UserRepository } from './repositories/user.repository';
import * as bcrypt from 'bcrypt'
import { UserEntity } from './entities/user.entity';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){}
    async register(authCredentialsDto:AuthCredentialsDTO): Promise<UserEntity>{
        let {username,password} = authCredentialsDto;
        let salt = 10;
        let hashPassword =await bcrypt.hash(password,salt);
        let credential = await this.userRepository.create({
            username,
            password:hashPassword
        })
        try{
            await this.userRepository.save(credential);
            delete credential.password;
            return credential;
        }catch(error){
            if(error.code ==='23505'){
                throw new ConflictException("username has been exist");
            }else{
                throw new InternalServerErrorException();
            }
        }
    }
    async login(authCredentialsDto:AuthCredentialsDTO):Promise<any>{
        let {username,password} = authCredentialsDto;
        let user = await this.userRepository.findOne({username:username});
        if(!user){
            throw new NotFoundException("This account does not exist. Please register!");
        }
        if(!bcrypt.compare(password,user.password)){
            throw new NotFoundException("Wrong password. Try again");
        }
        return "success";
    }
}
