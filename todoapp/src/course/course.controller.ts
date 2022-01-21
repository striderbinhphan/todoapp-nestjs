import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/guards/role.decorator';
import { RolesGuard } from 'src/guards/role.guard';
import { CourseService } from './course.service';
@ApiTags('course')
@Controller('/course')
export class CourseController {
    constructor(private courseService: CourseService){

    }
    @Get('')
    @Roles('Admin')
    getAll() {
        return this.courseService.getAllCourse();
    }
}
