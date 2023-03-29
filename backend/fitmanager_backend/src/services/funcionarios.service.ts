import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Funcionario } from '../models/funcionarios.model';
import * as bcrypt from 'bcrypt';
import { FuncionarioDto } from '../dto/funcionario.dto';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectModel(Funcionario.name)
    private funcionarioModel: Model<Funcionario>,
  ) { }

  async atualizarFuncionario(id: string, funcionarioDto: FuncionarioDto): Promise<Funcionario> {
    const attFuncionario = await this.funcionarioModel.findByIdAndUpdate(id, funcionarioDto, { new: true }).exec();
    return attFuncionario;
  }

  async removerFuncionarioPorId(id: string){
    await this.funcionarioModel.findByIdAndRemove(id);
  }

  async criarFuncionario(funcionarioDto: FuncionarioDto){
    const { cpf, name, email, password, salario, category, dataNascimento, phone, frequency } = funcionarioDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.funcionarioModel.create({
      cpf,
      name,
      email,
      password: hashedPassword,
      salario,
      category,
      dataNascimento,
      phone,
      frequency
    });
  }
}
