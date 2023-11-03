export class Horario {

  constructor(private _diaSemana: string,
              private _horario: string) {

  }

  get diaSemana(): string {
    return this._diaSemana;
  }

  set diaSemana(diaSemana: string) {
    this._diaSemana = diaSemana;
  }

  get horario(): string {
    return this._horario;
  }

  set horario(horario: string) {
    this._horario = horario;
  }
}
