import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LessonController } from "./lesson.controller";
import { LessonService } from "./lesson.service";
import { Lesson, LessonSchema } from "./schemas/lesson.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Lesson.name, schema: LessonSchema}])],
    providers: [LessonService],
    controllers: [LessonController],
})
export class LessonModule{}