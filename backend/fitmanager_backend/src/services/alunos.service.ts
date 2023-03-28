import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../models/user.model';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AlunoDto } from '../dto/alunos.dto';
import { Aluno } from 'src/models/alunos.model';

@Injectable()
export class AlunoService {
  constructor(
    @InjectModel(User.name)
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
