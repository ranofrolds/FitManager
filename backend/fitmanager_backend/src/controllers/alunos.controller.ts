import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlunoService } from '../services/alunos.service';
import { AlunoDto } from '../dto/alunos.dto';

@Controller('alunos')
export class AlunoController {
  constructor(private alunoService: AlunoService) {}

  @Post('/create')
  async criarAluno(@Body() alunoDto: AlunoDto){
    return this.alunoService.cadastrarAluno(alunoDto);
  }

  @Post('/delete/:cpf')
  async deletarAluno(@Param('cpf') cpf:string){
    return this.alunoService.removerAlunoPorCpf(cpf);
  }

  @Post('/update/:cpf')
  async atualizarAluno(@Param('cpf') cpf:string, @Body() alunoDto: AlunoDto){
    return this.alunoService.atualizarAluno(cpf, alunoDto);
  }

  @Get('/read/:id')
  async listarAluno(@Param('id') idAcademia:string){
    return this.alunoService.lerAlunoPorIdAcad(idAcademia);
  }
}
