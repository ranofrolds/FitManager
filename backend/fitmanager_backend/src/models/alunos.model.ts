import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Aluno extends Document {
  @Prop({ unique: [true, 'Duplicate cpf entered'] })
  cpf: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop({ unique: [true, 'Duplicate phone entered'] })
  phone: string;

  @Prop()
  academiaId: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  plano: string;

  @Prop()
  professor: string;


  // @Prop()
  // frequency: string;

  @Prop()
  dataNascimento: string;
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);
