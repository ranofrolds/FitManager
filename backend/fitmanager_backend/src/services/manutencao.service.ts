import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Manutencao } from '../models/manutencao.model';
import { ManutencaoDto } from '../dto/manutencao.dto';

@Injectable()
export class ManutencaoService {
  constructor(
    @InjectModel(Manutencao.name)
    private ManutencaoModel: Model<Manutencao>,
  ) { }

  async criarManutencao(manutencaoDto: ManutencaoDto){
    const { cnpjAcad, equipamento, phoneEmpresa } = manutencaoDto;

    const manutencao = await this.ManutencaoModel.create({
      cnpjAcad,
      equipamento,
      phoneEmpresa
    });
  }
}
