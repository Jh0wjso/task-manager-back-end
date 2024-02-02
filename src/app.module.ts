import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule, ThrottlerModuleOptions } from '@nestjs/throttler';
import { ConfigService } from './config/config.service';
import { PrismaModule } from './common/prisma/prisma.module';
import { NotesModule } from './modules/notes/notes.module';

const configService = new ConfigService();


@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: Number(configService.get('TTL')),
      limit: Number(configService.get('requestsLimit')),
    } as unknown as ThrottlerModuleOptions), // Cast the configuration to the extended interface
    PrismaModule,
    NotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
