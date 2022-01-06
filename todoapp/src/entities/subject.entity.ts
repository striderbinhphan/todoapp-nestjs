import { Entity, Column, PrimaryGeneratedColumn, TableForeignKey, OneToMany, PrimaryColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('subject')
export class SubjectEntity {
  @PrimaryGeneratedColumn()
  subject_id: number;

  @Column()
  name: string;

}