import { Body, Controller, Delete, ForbiddenException, Get, NotFoundException, Param, ParseIntPipe, Post, UseFilters, UsePipes } from '@nestjs/common';
import { SubjectService } from './subject.service';
import {SubjectDTO} from './subject.dto'
import { ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
import { JoiValidationPipe } from 'src/pipes.ts/joinvalidation.pipe';
import * as Joi from 'joi'
export const captainSchema = Joi.object({
    name: Joi.string().max(20).required(),
  }).options({ abortEarly: false, allowUnknown: true });
  
@ApiTags('subject')
@Controller('/subject')
export class SubjectController {
    constructor(private readonly subjectService:SubjectService){}
    @Get('')
    async getSubjects() {
        return await this.subjectService.getAll();
    }
    @Post('')
    @UsePipes(new JoiValidationPipe(captainSchema))
    async addSubject(@Body() subject:SubjectDTO){
        return this.subjectService.addSubject(subject);
        // throw new ForbiddenException();
    }
    @Get(':subject_id')
    async getOne(@Param('subject_id',ParseIntPipe) subject_id) {
        return await this.subjectService.getOne(subject_id);
    }
    @Delete(':subject_id')
    async deleteSubject(@Param() subject_id) {
        let subject = await this.subjectService.findSubject(subject_id);
        if(!subject){
            throw new NotFoundException();
        }

        await this.subjectService.deleteSubject(subject_id);
    }
}
