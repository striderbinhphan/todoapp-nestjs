import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto{
    @ApiProperty({type: String})
    name: string

    @ApiProperty({type: String})
    description: string

    @ApiProperty({type: Date})
    startDate: Date

    @ApiProperty({type: Date})
    endDate: Date
}