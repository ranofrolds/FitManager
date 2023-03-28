import { Body, Controller, Get, Post } from '@nestjs/common';
import { ManutencaoService } from '../services/manutencao.service';
import { ManutencaoDto } from '../dto/manutencao.dto';

@Controller('manutencao')
export class ManutencaoController {
  constructor(private manutencaoService: ManutencaoService) {}

  @Post('/manutencao')
  funcionario(@Body() ManutencaoDto: ManutencaoDto){
    return this.manutencaoService.CriarManutencao(ManutencaoDto);
  }
}
