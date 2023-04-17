import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Manutencao } from '../models/manutencao.model';
import { ManutencaoDto } from '../dto/manutencao.dto';


@Injectable()
export class ManutencaoService {
  constructor(
    @InjectModel(Manutencao.name)
    private manutencaoModel: Model<Manutencao>,
  ) { }

  async atualizarManutencao(id: string, manutencaoDto: ManutencaoDto): Promise<Manutencao> {
    const attManutencao = await this.manutencaoModel.findByIdAndUpdate(id, manutencaoDto, { new: true }).exec();
    return attManutencao;
  }

  async removerManutencaoPorId(id: string){
    await this.manutencaoModel.findByIdAndRemove(id);
  }

  async lerManutencaoPorIdAcademia(id: string){
    const alunos = await this.manutencaoModel.find({ academiaId: id });

    return alunos;
  }

  async criarManutencao(manutencaoDto: ManutencaoDto){
    const { equipamento, phoneEmpresa, academiaId, dataConserto } = manutencaoDto;
    const manutencao = await this.manutencaoModel.create({
      equipamento,
      phoneEmpresa,
      academiaId,
      dataConserto
    });
  }
}
