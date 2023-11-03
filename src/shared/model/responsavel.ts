import {Aluno} from "./aluno";
import {Endereco} from "./endereco";

export class Responsavel{

  constructor(private _nomeCompleto: string,
              private _rg: string,
              private _cpf: string,
              private _dataNascimento: Date,
              private _telefone: string,
              private _sexo: string,
              private _endereco: Endereco,
              private _alunosDependentes: Aluno[],
              private _email: string,
  ) {}

  get nomeCompleto(): string {
    return this._nomeCompleto;
  }

  set nomeCompleto(value: string) {
    this._nomeCompleto = value;
  }

  get rg(): string {
    return this._rg;
  }

  set rg(value: string) {
    this._rg = value;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get dataNascimento(): Date {
    return this._dataNascimento;
  }

  set dataNascimento(value: Date) {
    this._dataNascimento = value;
  }

  get telefone(): string {
    return this._telefone;
  }

  set telefone(value: string) {
    this._telefone = value;
  }

  get sexo(): string {
    return this._sexo;
  }

  set sexo(value: string) {
    this._sexo = value;
  }

  get endereco(): Endereco {
    return this._endereco;
  }

  set endereco(value: Endereco) {
    this._endereco = value;
  }

  get alunosDependentes(): Aluno[] {
    return this._alunosDependentes;
  }

  set alunosDependentes(value: Aluno[]) {
    this._alunosDependentes = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
