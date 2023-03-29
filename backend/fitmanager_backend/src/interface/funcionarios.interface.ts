import {Document} from 'mongoose';
export interface IFuncionario extends Document{
    readonly name: string;
    readonly salario: string;
    readonly email: string;
    readonly cpf: string;
    readonly category: string;
    readonly frequency: string;
    readonly dataNascimento: string;
    readonly password: string;
    readonly phone: string;
}