import { Module } from '@nestjs/common';
import { NoteModule } from './modules/note/note.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [NoteModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
