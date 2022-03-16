import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'
export type LessonDocument = Lesson & Document;
@Schema()
export class Lesson{
    @Prop({type: String})
    name: string;

    @Prop({type: String})
    description: string;
}
export const LessonSchema = SchemaFactory.createForClass(Lesson);
