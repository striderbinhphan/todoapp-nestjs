import { Exclude } from "class-transformer"
import { UserEntity } from "../../auth/entities/user.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Course  {
    @PrimaryGeneratedColumn('uuid')
    courseId: string
    @Column({unique: true})
    courseName: string
    @Column()
    courseStatus: COURSE_STATUS

    @ManyToOne(type=>UserEntity, (user)=>user.courses, {eager: true})
    @Exclude({toPlainOnly: true})
    user: UserEntity
}

export enum COURSE_STATUS{
    DONE="DONE",
    UNFINISHED="UNFINISHED"
}