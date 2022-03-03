import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { CourseRepository } from './respositories/course.repository';
import { COURSE_STATUS } from './entities/course.entity';
import { FilterCourseDto } from './dto/filter-course.dto';
import { UserEntity } from '../auth/entities/user.entity';
@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseRepository)
    private courseRepository: CourseRepository
  ){

  }
  async create(createCourseDto: CreateCourseDto, user: UserEntity):Promise<any> {
    
    return this.courseRepository.createCourse(createCourseDto,user);
  }

  findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: string) {
    let found = await this.courseRepository.findOne(id);
    if(!found){
      throw new NotFoundException(`Course with ${id} not found`)
    }
    return found;
  }

  async update(id: string, updateCourseDto: UpdateCourseDto):Promise<Course> {
    return this.courseRepository.updateCourse(id,updateCourseDto);
  }

  remove(id: string):Promise<void> {
    return this.courseRepository.removeCourse(id);
  }
  filterCourses(filterCourseDto:FilterCourseDto):Promise<Course[]>{
    return this.courseRepository.getFilterCourses(filterCourseDto);
  }
}
