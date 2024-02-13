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

  @ApiProperty({
    required: false,
    type: String,
    example: '2021-10-10T10:00:00.000Z',
  })
  createdAt: string;

  @ApiProperty({
    required: false,
    type: String,
    example: '2021-10-10T10:00:00.000Z',
  })
  updatedAt: string;

  @ApiProperty({
    required: false,
    type: Boolean,
    example: true,
  })
  isFavorite: boolean;
}
