export class CreateNoteDto {
  title: string;
  content: string;
  isfavorite?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
