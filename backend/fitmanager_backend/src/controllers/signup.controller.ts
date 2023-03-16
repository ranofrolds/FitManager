/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from '../dto/signup.dto';
import { SignupService } from '../services/signup.service';

@Controller('signup') // "/signup"
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  signup(@Body() signupDto: SignupDto) {
    return this.signupService.signup(signupDto);
  }
}
