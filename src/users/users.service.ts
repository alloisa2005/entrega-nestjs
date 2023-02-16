import { Injectable } from '@nestjs/common';
import { runInThisContext } from 'vm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: 1,
      age: 25,
      address: 'Nose 444',
      name: 'Juan Castro',
      password: '1212121',
      email: 'eljuan@gmail.com',
    },
    {
      id: 2,
      age: 33,
      address: 'Nose 452',
      name: 'Anthony Allois',
      password: '54645',
      email: 'tony@gmail.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes the userID: ${id}`;
  }
}
