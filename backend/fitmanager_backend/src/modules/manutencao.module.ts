import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ManutencaoController } from '../controllers/manutencao.controller';
import { ManutencaoService } from '../services/manutencao.service';
import { JwtStrategy } from '../auth/jwt.strategy';
import { ManutencaoSchema } from '../models/manutencao.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Manutencao', schema: ManutencaoSchema }]),
  ],
  controllers: [ManutencaoController],
  providers: [ManutencaoService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class ManutencaoModule { }
