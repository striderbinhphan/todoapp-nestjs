import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document, Schema as SchemaType} from 'mongoose'
export type TaskDocument = Task & Document;
@Schema()
export class Task{
    
    @Prop({type: String})
    id: string;

    @Prop({type: String})
    name: string;

    @Prop({type: String})
    description: string;
    
    @Prop({type: Date})
    startDate: Date;
    
     
    @Prop({type: Date})
    endDate: Date;
}
export const TaskSchema = SchemaFactory.createForClass(Task);
