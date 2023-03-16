import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupController } from '../controllers/signup.controller';
import { SignupSchema } from '../models/signup.model';
import { SignupService } from '../services/signup.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Signup',
        schema: SignupSchema,
      },
    ]),
  ],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
