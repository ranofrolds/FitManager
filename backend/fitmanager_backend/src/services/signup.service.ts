/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SignupModel } from '../models/signup.model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

interface User {
  cnpj: string;
  email: string;
  password: string;
}

@Injectable()
export class SignupService {
  constructor(@InjectModel('Signup') private signupModel: Model<SignupModel>) {}

  async signup(user: User) {
    const newUser = new this.signupModel({
      cnpj: user.cnpj,
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
