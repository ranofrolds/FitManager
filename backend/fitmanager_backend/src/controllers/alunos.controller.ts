import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlunoService } from '../services/alunos.service';
import { AlunoDto } from '../dto/alunos.dto';

@Controller('aluno')
export class AlunoController {
  constructor(private alunoService: AlunoService) {}

  @Post('/create')
  async criarAluno(@Body() alunoDto: AlunoDto){
    return this.alunoService.cadastrarAluno(alunoDto);
  }

  @Post('/delete/:id')
  async deletarFuncionario(@Param('id') id:string){
    return this.alunoService.removerAlunoPorId(id);
  }

  @Post('/update/:id')
  async atualizarFuncionario(@Param('id') id:string, @Body() alunoDto: AlunoDto){
    return this.alunoService.atualizarAluno(id, alunoDto);
  }

  @Get('/read/:id')
  async listarFuncionarios(@Param('id') idAcademia:string){
    
  }
}
