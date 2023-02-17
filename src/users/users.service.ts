import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async addUser(user: CreateUserDto) {
    const newUser = await this.userModel.create(user);
    return newUser;
  }

  async getUsers() {
    return await this.userModel.find();
  }

  async getUser(id: string) {
    return await this.userModel.findById(id);
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.findById(id);
    if (!user)
      return { status: 'ERROR', message: `Usuario ID ${id} no existe` };

    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );
    return updatedUser;
  }

  async deleteUser(id: string) {
    const user = await this.userModel.findById(id);
    if (!user)
      return { status: 'ERROR', message: `Usuario ID ${id} no existe` };

    return await this.userModel.findByIdAndDelete(id);
  }
}
