import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './modules/notes/notes.module';
import { PrismaModule } from './common/prisma/prisma.module';

@Module({
  imports: [NotesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
