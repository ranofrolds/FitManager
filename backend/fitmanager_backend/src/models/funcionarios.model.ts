import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Funcionario extends Document {
  @Prop({ unique: [true, 'Duplicate cpf entered'] })
  cpf: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop({ unique: [true, 'Duplicate phone entered'] })
  phone: string;

  @Prop()
  academia: string;

  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  category: string;

  @Prop()
  salario: string;

  @Prop()
  frequency: string;

  @Prop()
  dataNascimento: string;

}

export const FuncionarioSchema = SchemaFactory.createForClass(Funcionario);
