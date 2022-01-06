import { Entity, Column, PrimaryGeneratedColumn, TableForeignKey, OneToMany, OneToOne, ManyToMany } from 'typeorm';
import { CartEntity } from './cart.entity';
import { CourseEntity } from './course.entity';
import { SubscribeEntity } from './course_subscribe.entity';
import { ReviewEntity } from './review.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_username: string;

  @Column()
  user_password: string;
  @OneToMany(() => CourseEntity, (course: CourseEntity) => course.course_id)
  courses: CourseEntity[];
  @OneToOne(()=>CartEntity)
  cart: CartEntity
  @OneToMany(()=>UserEntity,(UserEntity)=>UserEntity.user_id)
  owner: UserEntity
  @OneToMany(()=>ReviewEntity,(ReviewEntity)=>ReviewEntity.review_id)
  reviews: ReviewEntity[]
}