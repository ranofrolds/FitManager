import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FuncionarioService } from '../services/funcionarios.service';
import { FuncionarioDto } from '../dto/funcionario.dto';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private funcionarioService: FuncionarioService) {}

  @Post('/create')
  async criarFuncionario(@Body() FuncionarioDto: FuncionarioDto){
    return this.funcionarioService.criarFuncionario(FuncionarioDto);
  }

  @Post('/delete/:id')
  async deletarFuncionario(@Param('id') id:string){
    return this.funcionarioService.removerFuncionarioPorId(id);
  }

  @Post('/update/:id')
  async atualizarFuncionario(@Param('id') id:string, @Body() FuncionarioDto: FuncionarioDto){
    return this.funcionarioService.atualizarFuncionario(id, FuncionarioDto);
  }

  @Get('/read/:id')
  async listarFuncionarios(@Param('id') idAcademia:string){
    
  }
}
