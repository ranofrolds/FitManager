import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { FuncionarioController } from '../controllers/funcionarios.controller';
import { FuncionarioService } from '../services/funcionarios.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import { FuncionarioSchema } from '../models/funcionarios.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Funcionario', schema: FuncionarioSchema }]),
  ],
  controllers: [FuncionarioController],
  providers: [FuncionarioService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class FuncionarioModule { }
