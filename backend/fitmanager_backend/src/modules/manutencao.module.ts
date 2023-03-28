import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { ManutencaoController } from '../controllers/manutencao.controller';
import { ManutencaoService } from '../services/manutencao.service';
import { ManutencaoStrategy } from '../strategy/manutencao.strategy';
import { ManutencaoSchema } from '../models/manutencao.model';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRES'),
          },
        };
      },
    }),
    MongooseModule.forFeature([{ name: 'Manutencao', schema: ManutencaoSchema }]),
  ],
  controllers: [ManutencaoController],
  providers: [ManutencaoService, ManutencaoStrategy],
  exports: [ManutencaoStrategy, PassportModule],
})
export class FuncionarioModule { }
