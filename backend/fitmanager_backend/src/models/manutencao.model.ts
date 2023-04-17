import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Manutencao extends Document {
  @Prop({ unique: [true, 'Duplicate cnpj entered'] })
  academiaId: string;

  @Prop({ unique: [true, 'Duplicate phone entered'] })
  phoneEmpresa: string;

  @Prop()
  equipamento: string;

  @Prop()
  dataConserto: string;
}

export const ManutencaoSchema = SchemaFactory.createForClass(Manutencao);
