import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { InjectConnection } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { Task, TaskDocument } from "./schemas/task.schema";
import {Model} from 'mongoose'
import { CreateTaskDto } from "./dtos/create-task.dto";
import {v4 as uuid} from 'uuid'
@Injectable()
export class TaskService{
    constructor(
        // @InjectConnection('tasks') private taskConnection: Connection,
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>
    ){}
    async create(createTaskDto: CreateTaskDto): Promise<Task> {
        const newid = uuid();
        console.log(newid);

        const createTask = new this.taskModel({
            id: uuid(),
            ...createTaskDto
        });
        console.log(createTask);
        return createTask.save();
    }
    async getAll(): Promise<Task[]> {
        const tasks = await this.taskModel.find().exec();
        return tasks;
    }
    async findById(id: string): Promise<Task> {
        const task = await this.taskModel.findOne({id}).exec();
        return task;
    }
}