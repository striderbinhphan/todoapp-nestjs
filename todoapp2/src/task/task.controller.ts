import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTaskDto } from "./dtos/create-task.dto";
import { Task } from "./schemas/task.schema";
import { TaskService } from "./task.service";

@Controller('/tasks')
@ApiTags('/tasks')
export class TaskController{
    constructor(private taskService: TaskService){}
    @Get()
    getAll(): Promise<Task[]>{
        return this.taskService.getAll();
    }
    @Post()
    create(@Body() createTaskDto: CreateTaskDto): Promise<Task>{
        return this.taskService.create(createTaskDto);
    }
    @Get(':id')
    getById(@Param('id') id: string): Promise<Task>{
        return this.taskService.findById(id);
    }
}