import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from 'src/entities/subject.entity';
import { Repository } from 'typeorm';
import {UserEntity} from '../entities/user.entity'
import { createUserDto } from './create-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(SubjectEntity)
    private readonly subjectRepo: Repository<SubjectEntity>,
  ){}
  getHello(): string {
    return 'Hello get Hello!';
  }
  findAll(): Promise<UserEntity[]> {
    return this.userRepo.find();
  }
  create(createUserDto:createUserDto):Promise<any>{
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user);
  }
}
