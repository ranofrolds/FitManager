import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManutencaoController } from '../controllers/manutencao.controller';
import { ManutencaoService } from '../services/manutencao.service';
import { ManutencaoSchema } from '../models/manutencao.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Manutencao', schema: ManutencaoSchema }]),
  ],
  controllers: [ManutencaoController],
  providers: [ManutencaoService],
})
export class ManutencaoModule { }
