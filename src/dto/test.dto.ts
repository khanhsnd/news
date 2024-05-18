import { ApiProperty } from "@nestjs/swagger";

export class TestDto {
    @ApiProperty({
        example: 'Khánh',
        description: 'Name',
    })
    name: string;
    @ApiProperty({
        example: '30',
        description: 'Age',
    })
    age: string;

}