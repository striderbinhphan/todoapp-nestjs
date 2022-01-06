import { Entity, Column, PrimaryGeneratedColumn, TableForeignKey, OneToMany, ManyToMany, PrimaryColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('course_subscribe')
export class SubscribeEntity {
    @PrimaryGeneratedColumn()
    user_id: number;
  @Column()
  course_id: number;

  @ManyToMany(()=>UserEntity,(SubscribeEntity)=>SubscribeEntity.user_id)
  subscriberCourses: SubscribeEntity[]
}