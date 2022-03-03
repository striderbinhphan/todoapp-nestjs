import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { UserEntity } from '../auth/entities/user.entity';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { FilterCourseDto } from './dto/filter-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Controller('courses')
@UseGuards(AuthGuard())
export class CoursesController {
  private logger = new Logger('CoursesController');
  constructor(
    private readonly coursesService: CoursesService,
    private configService: ConfigService,
  ) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto, @GetUser() user: UserEntity) :Promise<Course>{
    this.logger.verbose(user);
    return this.coursesService.create(createCourseDto,user);
  }
  @Get('')
  filterCourses(@Query() filterCourseDto:FilterCourseDto):Promise<Course[]>{
    console.log('confifigiaies',this.configService.get('DB_USERNAME'));

    console.log(filterCourseDto)
    return this.coursesService.filterCourses(filterCourseDto);
  }
  @Get()
  findAll():Promise<Course[]> {
    console.log('confifigiaies',this.configService.get('DB_USERNAME'));
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
