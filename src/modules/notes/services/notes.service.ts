import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from '../dtos/create-note.dto';
import { NotesRepository } from '../repositories/notes.repositories';

@Injectable()
export class NotesService {
  constructor(private readonly noteRepository: NotesRepository) {}

  async create({ title, content }: CreateNoteDto) {
    const note = await this.noteRepository.create({
      data: {
        title,
        content,
      },
    });
    return note;
  }

  async findOne(id: string) {
    const note = await this.noteRepository.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return note;
  }

  async findAll() {
    const notes = await this.noteRepository.findMany({});
    return notes;
  }

  async update(id: string, { title, content }: CreateNoteDto) {
    const note = await this.noteRepository.update({
      where: {
        id: parseInt(id),
      },
      data: {
        title,
        content,
      },
    });
    return note;
  }

  async remove(id: string) {
    const note = await this.noteRepository.delete({
      where: {
        id: parseInt(id),
      },
    });
    return note;
  }
}
