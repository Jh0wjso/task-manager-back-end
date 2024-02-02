import { Controller } from '@nestjs/common';
import { NotesService } from '../services/notes.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('Notes')
@ApiTags('Notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}
}
