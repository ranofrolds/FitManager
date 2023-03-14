import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SignupModel } from './signup.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

interface User {
  username: string;
  email: string;
  password: string;
}

@Injectable()
export class SignupService {
  constructor(@InjectModel('Signup') private signupModel: Model<SignupModel>) {}

  async signup(user: User) {
    const newUser = new this.signupModel({
      username: user.username,
      email: user.email,
      password: await bcrypt.hash(user.password, 10),
    });
    try {
      await newUser.save();
    } catch (error) {
      if (error.message.includes('username')) {
        throw new HttpException('username has been taken', 404);
      }
      if (error.message.includes('email')) {
        throw new HttpException('email has been taken', 404);
      }
    }
  }
}
