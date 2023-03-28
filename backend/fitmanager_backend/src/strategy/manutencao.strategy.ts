import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Funcionario } from '../models/funcionarios.model';

@Injectable()
export class FuncionarioStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Funcionario.name)
    private funcionarioModel: Model<Funcionario>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload) {
    const { id } = payload;

    const funcionario = await this.funcionarioModel.findById(id);

    if (!funcionario) {
      throw new UnauthorizedException('Login first to access this endpoint.');
    }

    return funcionario;
  }
}