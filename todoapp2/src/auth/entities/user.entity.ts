import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn('uuid')
    userId: string
    @Column({unique:true})
    username: string
    @Column()
    @Exclude()
    password: string;
  
    constructor(partial: Partial<UserEntity>) {
      Object.assign(this, partial);
    }
}