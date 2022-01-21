import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "./create-course.dto";

export class FilterCourseDto extends PartialType(CreateCourseDto){
    courseName?:string
    userId?: string
    search?:string
}