/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from '../services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/modules/user.module';
import { FuncionarioModule } from 'src/modules/funcionarios.module';
import { AlunoModule } from 'src/modules/alunos.module';
import { ManutencaoModule } from 'src/modules/manutencao.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'src/.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AuthModule,
    UserModule,
    FuncionarioModule,
    AlunoModule,
    ManutencaoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
