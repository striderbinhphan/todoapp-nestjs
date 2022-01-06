import { Entity, Column, PrimaryGeneratedColumn, TableForeignKey, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('course')
export class CourseEntity {
  @PrimaryGeneratedColumn()
  course_id: number;

  @Column()
  course_name: string;

  @Column()
  course_description: string;
  @OneToMany(()=>UserEntity,(UserEntity)=>UserEntity.user_id)
  owner: UserEntity
}