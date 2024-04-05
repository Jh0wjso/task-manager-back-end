import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get('findByEmail/:email')
  findByEmail(email: string) {
    return this.userService.findByEmail(email);
  }

  /*
  @Get('validateUser/:email/:password')
  validateUser(email: string, password: string) {
    return this.userService.validateUser(email, password);
  }*/

  @Get('validateUser/:email/:password')
  validateUser(@Param('email') email: string, @Param('password') password: string) {
    return this.userService.validateUser(email, password);
  }

  // Retornar todas as notes por usuário
  @Get('userNotes/:userId')
  userNotes(@Param('userId') userId: string) {
    return this.userService.getNotesByUser(userId);
  }

  @Get('findByName/:name')
  findByName(name: string) {
    return this.userService.findByName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
