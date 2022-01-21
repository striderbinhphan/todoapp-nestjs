import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Course  {
    @PrimaryGeneratedColumn('uuid')
    courseId: string
    @Column()
    courseName: string
    @Column()
    courseStatus: COURSE_STATUS
    @Column()
    userId: string
}

export enum COURSE_STATUS{
    DONE="DONE",
    UNFINISHED="UNFINISHED"
}