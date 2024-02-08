import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { NotesService } from '../services/notes.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateNoteDto } from '../dtos/create-note.dto';

@Controller('Notes')
@ApiTags('Notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async createNote(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  async findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  async findOne(id: string) {
    return this.notesService.findOne(id);
  }

  @Patch(':id')
  async update(@Body() updateNoteDto: CreateNoteDto, id: string) {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  async remove(id: string) {
    return this.notesService.remove(id);
  }
}
