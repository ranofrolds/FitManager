import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class manu extends Document {
  @Prop({ unique: [true, 'Duplicate cnpj entered'] })
  cnpj: string;

  @Prop({ unique: [true, 'Duplicate phone entered'] })
  phone: string;

  @Prop()
  name: string;

}

export const Manu = SchemaFactory.createForClass(manu);
