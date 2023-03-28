import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { FuncionarioController } from '../controllers/funcionarios.controller';
import { FuncionarioService } from '../services/funcionarios.service';
import { FuncionarioStrategy } from '../strategy/funcionarios.strategy';
import { FuncionarioSchema } from '../models/funcionarios.model';

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
    MongooseModule.forFeature([{ name: 'Funcionario', schema: FuncionarioSchema }]),
  ],
  controllers: [FuncionarioController],
  providers: [FuncionarioService, FuncionarioStrategy],
  exports: [FuncionarioStrategy, PassportModule],
})
export class FuncionarioModule { }
