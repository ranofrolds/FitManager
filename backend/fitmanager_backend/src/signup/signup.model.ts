/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Signup {
  @Prop({unique: true})
  username: string;

  @Prop({unique: true})
  email: string;

  @Prop()
  password: string;
}

export type SignupModel = Signup & Document;

export const SignupSchema = SchemaFactory.createForClass(Signup);
