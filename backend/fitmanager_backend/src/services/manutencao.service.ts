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

  async lerManutencaoPorIdAcademia(id: string) {
    const manutencoes = await this.manutencaoModel.find({ academiaId: id });
    
    // Mapeia os documentos de manutenção para um array de objetos JavaScript simples
    const manutencoesSimples = manutencoes.map((manutencao) => {
      const manutencaoSimples = manutencao.toObject(); // Obtém um objeto JavaScript simples
      manutencaoSimples.id = manutencao._id; // Adiciona o ID do documento como a propriedade "id"
      delete manutencaoSimples._id; // Remove a propriedade "_id"
      return manutencaoSimples;
    });
  
    return manutencoesSimples;
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
