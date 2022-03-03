import { Exclude } from "class-transformer";
import { Course } from "../../courses/entities/course.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn('uuid')
    userId: string
    @Column({unique:true})
    username: string
    @Column()
    @Exclude()
    password: string;

    @OneToMany(_type=>Course, (course)=> course.user, {eager: false})
    courses: Course[]
    
    constructor(partial: Partial<UserEntity>) {
      Object.assign(this, partial);
    }
}