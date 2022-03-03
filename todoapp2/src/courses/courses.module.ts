import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { CourseRepository } from './respositories/course.repository';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[ConfigModule, TypeOrmModule.forFeature([CourseRepository]), AuthModule, ],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
