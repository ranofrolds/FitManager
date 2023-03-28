import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Aluno } from '../models/alunos.model';

import { AlunoDto } from '../dto/alunos.dto';

@Injectable()
export class AlunoService {
  constructor(
    @InjectModel(Aluno.name)
    private alunoModel: Model<Aluno>,
  ) { }

  async CadastrarAluno(alunoDto: AlunoDto){
    const { name, plano, professor, telefone, idade } = alunoDto;

    const user = await this.alunoModel.create({
      name,
      plano,
      professor,
      telefone,
      idade,
    });
  } 
}
