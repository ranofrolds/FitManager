import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Funcionario } from '../models/funcionarios.model';
import * as bcrypt from 'bcrypt';
import { FuncionarioDto } from '../dto/funcionario.dto';
// import { IFuncionario } from 'src/interface/funcionarios.interface';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectModel(Funcionario.name)
    private funcionarioModel: Model<Funcionario>,
  ) { }

  async atualizarFuncionario(cpf: string, funcionarioDto: FuncionarioDto): Promise<Funcionario> {
    const attFuncionario = await this.funcionarioModel
      .findOneAndUpdate({ cpf }, funcionarioDto, { new: true })
      .exec();
    return attFuncionario;
  }

  async removerFuncionarioPorCpf(cpf: string): Promise<boolean> {
    try {
      const funcionarioRemovido = await this.funcionarioModel.findOneAndDelete({ cpf: cpf });
      return !!funcionarioRemovido; // retorna true se encontrou e removeu o funcionario
    } catch (erro) {
      console.error(erro);
      return false; // retorna false se ocorrer um erro
    }

  }
  async criarFuncionario(funcionarioDto: FuncionarioDto){
    const { cpf, name, email, password, salario, category, dataNascimento, phone } = funcionarioDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const funcionario = await this.funcionarioModel.create({
      cpf,
      name,
      email,
      password: hashedPassword,
      salario,
      category,
      dataNascimento,
      phone,
    });
  }

  async lerFuncionarioPorIdAcad(idAcademia: string) {
    const funcionarios = await this.funcionarioModel.find({ academiaId: idAcademia });

    return funcionarios;
  }
}
