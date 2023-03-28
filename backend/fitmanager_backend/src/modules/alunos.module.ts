import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AlunoController } from '../controllers/alunos.controller';
import { AlunoService } from '../services/alunos.service';
import { AlunoStrategy } from '../strategy/alunos.strategy';
import { AlunoSchema } from '../models/alunos.model';

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
    MongooseModule.forFeature([{ name: 'Aluno', schema: AlunoSchema }]),
  ],
  controllers: [AlunoController],
  providers: [AlunoService, AlunoStrategy],
  exports: [AlunoStrategy, PassportModule],
})
export class AlunoModule { }
