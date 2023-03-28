import { Body, Controller, Get, Post } from '@nestjs/common';
import { FuncionarioService } from '../services/funcionarios.service';
import { FuncionarioDto } from '../dto/funcionarios.dto';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private funcionarioService: FuncionarioService) {}

  @Post('/funcionario')
  funcionario(@Body() FuncionarioDto: FuncionarioDto){
    return this.funcionarioService.CriarFuncionario(FuncionarioDto);
  }
}
