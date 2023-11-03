import {Endereco} from "./endereco";

export class Aluno{
  constructor(private _nome: string,
              private _nomePai: string,
              private _nomeMae: string,
              private _dataNascimento: Date,
              private _endereco: Endereco,
              private _telefonesEmergencia: string[],
              private _sexo: string,
              private _rg?: string,
              private _cpf?: string,
              private _email?: string
  ) {
  }
  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get nomePai(): string {
    return this._nomePai;
  }

  set nomePai(value: string) {
    this._nomePai = value;
  }

  get nomeMae(): string {
    return this._nomeMae;
  }

  set nomeMae(value: string) {
    this._nomeMae = value;
  }

  get dataNascimento(): Date {
    return this._dataNascimento;
  }

  set dataNascimento(value: Date) {
    this._dataNascimento = new Date(value);
  }

  get telefonesEmergencia(): string[] {
    return this._telefonesEmergencia;
  }

  set telefonesEmergencia(value: string[]) {
    this._telefonesEmergencia = value;
  }
  get rg(): any {
    return this._rg;
  }

  set rg(value: string) {
    this._rg = value;
  }

  get cpf(): any {
    return this._cpf;
  }

  get email(): any {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get sexo(): string {
    return this._sexo;
  }

  set sexo(value: string) {
    this._sexo = value;
  }

}
