import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateLessonDto } from "./dtos/create-task.dto";
import { LessonService } from "./lesson.service";
import { Lesson } from "./schemas/lesson.schema";

@Controller('/lessons')
@ApiTags('/lessons')
export class LessonController{
    constructor(private lessonService: LessonService){}
    @Get()
    getAll(): Promise<Lesson[]>{
        return this.lessonService.getAll();
    }
    @Post()
    create(@Body() createLessonDto: CreateLessonDto): Promise<Lesson>{
        return this.lessonService.create(createLessonDto);
    }
}