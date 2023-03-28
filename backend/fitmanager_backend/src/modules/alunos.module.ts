import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunoController } from '../controllers/alunos.controller';
import { AlunoService } from '../services/alunos.service';
import { AlunoSchema } from '../models/alunos.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Aluno', schema: AlunoSchema }]),
  ],
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AlunoModule { }
