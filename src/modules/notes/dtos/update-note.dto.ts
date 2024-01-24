import { ApiProperty } from '@nestjs/swagger';

export class UpdateNoteDto {
  @ApiProperty({
    required: true,
    type: String,
    example: 'Note title',
  })
  title: string;

  @ApiProperty({
    required: true,
    type: String,
    example: 'Note content',
  })
  content: string;
}
