import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ManutencaoService } from '../services/manutencao.service';
import { ManutencaoDto } from '../dto/manutencao.dto';

@Controller('manutencao')
export class ManutencaoController {
  constructor(private manutencaoService: ManutencaoService) {}

  @Post('/create')
  async createManutencao(@Body() ManutencaoDto: ManutencaoDto){
    return this.manutencaoService.criarManutencao(ManutencaoDto);
  }

  @Post('/delete/:id')
  async deletarFuncionario(@Param('id') id:string){
    return this.manutencaoService.removerManutencaoPorId(id);
  }

  @Post('/update/:id')
  async atualizarManutencao(@Param('id') id:string, @Body() manutencaoDto: ManutencaoDto){
    return this.manutencaoService.atualizarManutencao(id, manutencaoDto);
  }

  @Get('/read/:id')
  async lerManutencao(@Param('id') id:string){
    return this.manutencaoService.lerManutencao(id);
  }
}
