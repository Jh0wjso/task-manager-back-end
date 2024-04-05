import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UserService {

  constructor(private readonly prismaService: PrismaService) {}

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

  findByName(name: string) {
    const user = this.prismaService.user.findUnique({
      where: {
        name: name
      } as any
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

  async validateUser(email: string, password: string) {
    const user = this.findByEmail(email);
    if (user && (await user).password === password) {
      return {statusCode: 200, message: 'Login success', user: await user};
    }

    return {statusCode: 404, message: 'Invalid email or password'};
  }

  
  getNotesByUser(userId: string) {
    const notes = this.prismaService.notes.findMany({
      where: {
        userId: parseInt(userId) // Convert userId to a number
      }
    });
    return notes;
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
