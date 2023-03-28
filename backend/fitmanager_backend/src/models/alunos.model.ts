import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Aluno extends Document {
  @Prop({ unique: [true, 'Duplicate name entered'] })
  name: string;

  @Prop()
  plano: string;

  @Prop()
  professor: string;

  @Prop()
  telefone: string;

  @Prop()
  idade: string;
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);
