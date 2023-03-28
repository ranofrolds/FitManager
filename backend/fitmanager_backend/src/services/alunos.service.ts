import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Aluno } from '../models/alunos.model';

import { AlunoDto } from '../dto/alunos.dto';
import { Aluno } from 'src/models/alunos.model';

@Injectable()
export class AlunoService {
  constructor(
<<<<<<< HEAD
    @InjectModel(Aluno.name)
=======
    @InjectModel(User.name)
>>>>>>> 98835ed1a9e1d6b993b1a2a6c54d0e2ea2754a6d
    private alunoModel: Model<Aluno>,
  ) { }

  async CadastrarAluno(alunoDto: AlunoDto){
    const { name, plano, professor, telefone, idade } = alunoDto;

<<<<<<< HEAD
    const user = await this.alunoModel.create({
=======
    const aluno = await this.alunoModel.create({
>>>>>>> 98835ed1a9e1d6b993b1a2a6c54d0e2ea2754a6d
      name,
      plano,
      professor,
      telefone,
      idade,
    });
  } 
}
