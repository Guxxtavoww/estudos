import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);

    return newUser.save();
  }

  getAll() {
    const users = this.userModel.find();

    return users;
  }

  getOne(id: string | number) {
    const user = this.userModel.findById(id);

    return user;
  }

  updateOne(id: string | number, updateUserDto: UpdateUserDto) {
    const updatedUser = this.userModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        updateUserDto,
      },
      {
        new: true,
      },
    );

    return updatedUser;
  }

  deleteOne(id: string | number) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }
}
