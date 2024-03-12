import { Module } from '@nestjs/common';
import { NoteModule } from './modules/note/note.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [NoteModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
