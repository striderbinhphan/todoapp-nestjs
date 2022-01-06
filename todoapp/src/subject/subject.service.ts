import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from 'src/entities/subject.entity';
import { Repository } from 'typeorm';
import { SubjectDTO } from './subject.dto';

@Injectable()
export class SubjectService {
    constructor(
        @InjectRepository(SubjectEntity)
        private readonly subjectRepo: Repository<SubjectEntity>,
    ){}
    getAll():Promise<SubjectEntity[]>{
        return this.subjectRepo.find();
    }
    getOne(subject_id:number):Promise<SubjectEntity>{
        return this.subjectRepo.findOne(subject_id)
    }
    findSubject(subjectId:number):Promise<SubjectEntity|undefined>{
        return this.subjectRepo.findOne(subjectId)
    }
    addSubject(subject:SubjectDTO):Promise<any>{
        const newSubject = this.subjectRepo.create(subject);
        return this.subjectRepo.save(newSubject);
    }
    async deleteSubject(subject_id:number):Promise<any>{
        return await this.subjectRepo.delete(subject_id)
    }
}
