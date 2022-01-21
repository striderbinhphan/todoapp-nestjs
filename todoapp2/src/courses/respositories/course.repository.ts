import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityRepository, Repository } from "typeorm";
import { CreateCourseDto } from "../dto/create-course.dto";
import { FilterCourseDto } from "../dto/filter-course.dto";
import { UpdateCourseDto } from "../dto/update-course.dto";
import { Course, COURSE_STATUS } from "../entities/course.entity";
@EntityRepository(Course)
export class CourseRepository extends Repository<Course>{
    async createCourse(createCourseDto:CreateCourseDto):Promise<Course>{
        let {courseName,userId} = createCourseDto;
        let course = {
            courseName,
            userId,
            courseStatus:COURSE_STATUS.DONE
        }
        let found=await this.create(course);
        await this.save(found)
        return found;
    }
    async updateCourse(id:string,updateCourseDto:UpdateCourseDto):Promise<Course>{
        let {courseName,userId} = updateCourseDto;
        let found = await this.findOne(id);
        if(!found){
            throw new NotFoundException(`Course with ${id} not found`)
        }
        found.courseName = courseName;
        found.userId = userId;
        await this.save(found);
        return found;
    }
    async removeCourse(id:string):Promise<void>{
        let found=await this.delete(id);
        if(found.affected ===0){
            throw new NotFoundException(`Course with ${id} not found`);
        }
    }
    async getFilterCourses(filterCourseDto:FilterCourseDto):Promise<Course[]>{
        let {courseName, userId,search} = filterCourseDto;
        let query = this.createQueryBuilder('course');
        if(courseName){
            query.andWhere('course.courseName=:courseName',{courseName})
        }
        if(userId){
            query.andWhere('course.userId=:userId',{userId})
        }
        if(search){
            query.andWhere('course.courseName LIKE :search',{search:`%${search}`})
        }
        let course = await query.getMany();
        return course ;
    }
}