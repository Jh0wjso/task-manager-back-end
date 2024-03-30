import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private readonly prismaService: PrismaService) {}

  /*

      model User {
      userId    Int     @map("userId") @default(autoincrement()) @id
      email    String   @unique
      password String
      name     String
      createdAt DateTime @default(now())
      updatedAt DateTime @updatedAt
      notes    Notes[]

      @@map("users")
    }
  */

  async create(createUserDto: CreateUserDto) {
    const user = this.prismaService.user.create({
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
        name: createUserDto.name,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    });
    
    return user;
  }

  findAll() {
    const users = this.prismaService.user.findMany();
    return users;
  }

  findOne(id: number) {
    const user = this.prismaService.user.findUnique({
      where: {
        userId: id
      }
    });
    return user;
  }

  findByEmail(email: string) {
    const user = this.prismaService.user.findUnique({
      where: {
        email: email
      }
    });
    return user;
  }

  validateUser(email: string, password: string) {
    const user = this.prismaService.user.findFirst({
      where: {
        email: email,
        password: password
      }
    });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.prismaService.user.update({
      where: {
        userId: id
      },
      data: {
        email: updateUserDto.email,
        password: updateUserDto.password,
        name: updateUserDto.name,
        updatedAt: new Date(),
      }
    });
    return user;
  }

  remove(id: number) {
    const user = this.prismaService.user.delete({
      where: {
        userId: id
      }
    });
    return user;
  }
}
