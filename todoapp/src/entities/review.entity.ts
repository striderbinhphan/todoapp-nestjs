import { Entity, Column, PrimaryGeneratedColumn, TableForeignKey, OneToMany } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('review')
export class ReviewEntity {
  @PrimaryGeneratedColumn()
  review_id: number;

  @Column()
  review_feedback: string;

  
  
}