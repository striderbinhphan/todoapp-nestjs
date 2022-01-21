import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { FilterCourseDto } from './dto/filter-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) :Promise<Course>{
    return this.coursesService.create(createCourseDto);
  }
  @Get('')
  filterCourses(@Query() filterCourseDto:FilterCourseDto):Promise<Course[]>{
    console.log(filterCourseDto)
    return this.coursesService.filterCourses(filterCourseDto);
  }
  @Get()
  findAll():Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<Course> {
    return this.coursesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto):Promise<Course> {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<void> {
    return this.coursesService.remove(id);
  }
  
}
