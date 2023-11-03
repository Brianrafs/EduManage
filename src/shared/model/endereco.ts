export class Endereco {

  constructor(private _rua: string,
              private _numero: string,
              private _cidade: string,
              private _estado: string,
              private _cep: string){}

  get rua(): string {
    return this._rua;
  }

  set rua(value: string) {
    this._rua = value;
  }

  get numero(): string {
    return this._numero;
  }

  set numero(value: string) {
    this._numero = value;
  }

  get cidade(): string {
    return this._cidade;
  }

  set cidade(value: string) {
    this._cidade = value;
  }

  get estado(): string {
    return this._estado;
  }

  set estado(value: string) {
    this._estado = value;
  }

  get cep(): string {
    return this._cep;
  }

  set cep(value: string) {
    this._cep = value;
  }
}
