import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlunoService } from '../services/alunos.service';
import { AlunoDto } from '../dto/alunos.dto';

@Controller('aluno')
export class AlunoController {
  constructor(private authService: AlunoService) {}

  @Post('/aluno')
  aluno(@Body() alunoDto: AlunoDto){
    return this.authService.CadastrarAluno(alunoDto);
  }
}
