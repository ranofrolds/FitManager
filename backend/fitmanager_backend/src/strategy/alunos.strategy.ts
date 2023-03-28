import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Aluno } from '../models/alunos.model';

@Injectable()
export class AlunoStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(Aluno.name)
    private alunoModel: Model<Aluno>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload) {
    const { id } = payload;

    const aluno = await this.alunoModel.findById(id);

    if (!aluno) {
      throw new UnauthorizedException('Login first to access this endpoint.');
    }

    return aluno;
  }
}