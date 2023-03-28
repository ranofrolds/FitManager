import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { FuncionarioController } from '../controllers/funcionarios.controller';
import { FuncionarioService } from '../services/funcionarios.service';
import { FuncionarioSchema } from '../models/funcionarios.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Funcionario', schema: FuncionarioSchema }]),
  ],
  controllers: [FuncionarioController],
  providers: [FuncionarioService],
})
export class FuncionarioModule { }
