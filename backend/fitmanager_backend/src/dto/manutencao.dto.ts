import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class ManutencaoDto{
  @IsNotEmpty()
  @IsString()
  readonly equipamento: string;

  @IsNotEmpty()
  @IsString()
  readonly phoneEmpresa: string;

  @IsNotEmpty()
  @IsString()
  readonly academiaId: string;

  @IsNotEmpty()
  @IsString()
  readonly dataConserto: string;
}