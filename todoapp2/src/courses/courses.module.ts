import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { CourseRepository } from './respositories/course.repository';

@Module({
  imports:[TypeOrmModule.forFeature([CourseRepository])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
