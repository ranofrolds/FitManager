import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AlunoController } from '../controllers/alunos.controller';
import { AlunoService } from '../services/alunos.service';
import { AlunoSchema } from '../models/alunos.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Aluno', schema: AlunoSchema }]),
  ],
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AlunoModule { }
