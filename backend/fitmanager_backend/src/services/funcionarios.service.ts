import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Funcionario } from '../models/funcionarios.model';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { FuncionarioDto } from '../dto/funcionarios.dto';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectModel(Funcionario.name)
    private userModel: Model<Funcionario>,
    private jwtService: JwtService,
  ) { }

  async CriarFuncionario(funcionarioDto: FuncionarioDto){
    const { cpf, name, email, password, salario, category, dataNascimento, phone, frequency } = funcionarioDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
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
