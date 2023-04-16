import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Aluno } from '../models/alunos.model';
import { AlunoDto } from '../dto/alunos.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AlunoService {
  constructor(
    @InjectModel(Aluno.name)
    private alunoModel: Model<Aluno>,
  ) {}

  async atualizarAluno(id: string, alunoDto: AlunoDto): Promise<Aluno> {
    const attAluno = await this.alunoModel
      .findByIdAndUpdate(id, alunoDto, { new: true })
      .exec();
    return attAluno;
  }

  async removerAlunoPorCpf(cpf: string): Promise<boolean> {
    try {
      const alunoRemovido = await this.alunoModel.findOneAndDelete({ cpf: cpf });
      return !!alunoRemovido; // retorna true se encontrou e removeu o aluno
    } catch (erro) {
      console.error(erro);
      return false; // retorna false se ocorrer um erro
    }
  }
  
  async lerAlunoPorIdAcad(idAcademia: string){
    const readAluno = await this.alunoModel.findById(idAcademia);
    return readAluno;
  }

  async cadastrarAluno(alunoDto: AlunoDto) {

    const {
      cpf,
      name,
      email,
      password,
      plano,
      professor,
      dataNascimento,
      phone
    } = alunoDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const aluno = await this.alunoModel.create({
      cpf,
      name,
      email,
      password:hashedPassword,
      plano,
      professor,
      dataNascimento,
      phone,
    });
  }
}
