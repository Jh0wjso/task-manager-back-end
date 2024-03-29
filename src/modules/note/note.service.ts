import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class NoteService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createNoteDto: CreateNoteDto) {
    const note = this.prismaService.notes.create({
      data: {
        title: createNoteDto.title,
        content: createNoteDto.content,
        isfavorite: createNoteDto.isfavorite,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: createNoteDto.userId,
      },
    });
    return note;
  }

  async findAll() {
    const notes = this.prismaService.notes.findMany();
    return notes;
  }

  async findOne(id: number) {
    const note = this.prismaService.notes.findUnique({
      where: {
        id: id,
      },
    });
    return note;
  }

  async findByTitle(title: string) {
    const note = this.prismaService.notes.findMany({
      where: {
        title: {
          contains: title,
        },
      },
    });
    return note;
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    const note = this.prismaService.notes.update({
      where: {
        id: id,
      },
      data: {
        title: updateNoteDto.title,
        content: updateNoteDto.content,
        isfavorite: updateNoteDto.isfavorite,
        updatedAt: new Date(),
        userId: updateNoteDto.userId,
      },
    });
    return note;
  }

  async remove(id: number) {
    const note = this.prismaService.notes.delete({
      where: {
        id: id,
      },
    });
    return note;
  }
}
