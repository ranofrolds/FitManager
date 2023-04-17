import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FuncionarioService } from '../services/funcionarios.service';
import { FuncionarioDto } from '../dto/funcionario.dto';

@Controller('funcionarios')
export class FuncionarioController {
  constructor(private funcionarioService: FuncionarioService) {}

  @Post('/create')
  async criarFuncionario(@Body() funcionarioDto: FuncionarioDto){
    return this.funcionarioService.criarFuncionario(funcionarioDto);
  }

  @Post('/delete/:cpf')
  async deletarFuncionario(@Param('cpf') cpf:string){
    return this.funcionarioService.removerFuncionarioPorCpf(cpf);
  }

  @Post('/update/:cpf')
  async atualizarFuncionario(@Param('cpf') cpf:string, @Body() funcionarioDto: FuncionarioDto){
    return this.funcionarioService.atualizarFuncionario(cpf, funcionarioDto);
  }

  @Get('/read/:id')
  async listarFuncionario(@Param('id') idAcademia:string){
    return this.funcionarioService.lerFuncionarioPorIdAcad(idAcademia);
  }
}