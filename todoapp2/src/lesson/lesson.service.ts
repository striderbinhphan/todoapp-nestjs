import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import {Model} from 'mongoose'
import { Lesson, LessonDocument } from "./schemas/lesson.schema";
import { CreateLessonDto } from "./dtos/create-task.dto";
@Injectable()
export class LessonService{
    constructor(
        @InjectConnection('lessons') private lessonConnection: Connection,
        // @InjectModel(Lesson.name) private taskModel: Model<LessonDocument>
    ){}
    async create(createLessonDto: CreateLessonDto): Promise<Lesson> {
        return ;
    }
    async getAll(): Promise<Lesson[]> {
        return ;
    }
}