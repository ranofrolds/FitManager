import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './signup.dto';
import { SignupService } from './signup.service';

@Controller('signup') // "/signup"
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post()
  signup(@Body() signupDto: SignupDto) {
    return this.signupService.signup(signupDto);
  }
}
