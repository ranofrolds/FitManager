import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Funcionario } from '../models/funcionarios.model';
import * as bcrypt from 'bcrypt';
import { FuncionarioDto } from '../dto/funcionarios.dto';
import { IFuncionario } from 'src/interface/funcionarios.interface';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectModel(Funcionario.name)
    private FuncionarioModel: Model<Funcionario>,
  ) { }

  async CriarFuncionario(funcionarioDto: FuncionarioDto){
    const { cpf, name, email, password, salario, category, dataNascimento, phone, frequency } = funcionarioDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const funcionario = await this.FuncionarioModel.create({
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

  async getFuncionarios():Promise<IFuncionario[]>{
    const funcionarioData = await this.FuncionarioModel.find()
    if(!funcionarioData || funcionarioData.lenght == 0){
      throw new NotFoundException("Funcionario data not found")
    }
    return funcionarioData
  }
  
  
}
