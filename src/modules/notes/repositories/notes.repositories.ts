import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/prisma/prisma.service";
import { Prisma } from '@prisma/client';


@Injectable()
export class NotesRepository {
    constructor(private readonly prismaService: PrismaService) {}

    public create(args: Prisma.NoteCreateArgs) {
        return this.prismaService.note.create(args);
      }
    
      public findMany(args: Prisma.NoteFindManyArgs) {
        return this.prismaService.note.findMany(args);
      }
    
      public findUnique(args: Prisma.NoteFindUniqueArgs) {
        return this.prismaService.note.findUnique(args);
      }
    
      public update(args: Prisma.NoteUpdateArgs) {
        return this.prismaService.note.update(args);
      }
    
      public delete(args: Prisma.NoteDeleteArgs) {
        return this.prismaService.note.delete(args);
      }
}
