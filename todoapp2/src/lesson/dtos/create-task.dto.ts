import { ApiProperty } from "@nestjs/swagger";

export class CreateLessonDto{
    @ApiProperty({type: String})
    name: string

    @ApiProperty({type: String})
    description: string
}