export class CreateNoteDto {
  title: string;
  content: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
