import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AlunoDto{
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly plano: string;

  @IsNotEmpty()
  @IsString()
  readonly professor: string;

  @IsNotEmpty()
  @IsString()
  readonly telefone: string;

  @IsNotEmpty()
  @IsString()
  readonly idade: string;
}