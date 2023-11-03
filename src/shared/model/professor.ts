import {Turma} from "./turma";

export class Professor{

  constructor(private _nomeCompleto: string,
              private _rg: string,
              private _cpf: string,
              private _dataNascimento: Date,
              private _telefone: string,
              private _email: string,
              private _sexo: string,
              private _turmas: Turma[]) {
  }
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

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get sexo(): string {
    return this._sexo;
  }

  set sexo(value: string) {
    this._sexo = value;
  }

  get turmas(): Turma[] {
    return this._turmas;
  }

  set turmas(value: Turma[]) {
    this._turmas = value;
  }

}
