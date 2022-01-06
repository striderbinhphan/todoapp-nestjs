import { Entity, Column, PrimaryGeneratedColumn, TableForeignKey, OneToMany, OneToOne } from 'typeorm';
import { CourseEntity } from './course.entity';

@Entity('cart')
export class CartEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  cart_id: number;
}