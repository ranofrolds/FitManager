import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, Matches} from 'class-validator';

export class FuncionarioDto {
  
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly cpf: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;
  
  @IsNotEmpty()
  @IsString()
  readonly salario: string;

  @IsNotEmpty()
  @IsString()
  readonly category: string;

  @IsNotEmpty()
  @IsString()
  readonly frequency: string;

  @IsNotEmpty()
  @IsString()
  readonly dataNascimento: string;

}

function defaultMessage() {
    throw new Error('Function not implemented.');
}
