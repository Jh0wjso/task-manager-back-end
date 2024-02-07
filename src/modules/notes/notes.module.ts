import { Module } from '@nestjs/common';
import { NotesService } from './services/notes.service';
import { NotesController } from './controller/notes.controller';
import { NotesRepository } from './repositories/notes.repositories';

@Module({
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
  exports: [NotesService, NotesRepository],
})
export class NotesModule {}
