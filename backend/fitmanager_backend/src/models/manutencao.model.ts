import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Manutencao extends Document {
  @Prop()
  academiaId: string;

  @Prop()
  phoneEmpresa: string;

  @Prop()
  equipamento: string;

  @Prop()
  dataConserto: string;
}

export const ManutencaoSchema = SchemaFactory.createForClass(Manutencao);
