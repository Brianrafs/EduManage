import {Professor} from "./professor";
import {Horario} from "./horario";
import {Aluno} from "./aluno";

export class Turma{

  constructor(private _id: number,
              private _modalidade: string,
              private _professor: Professor,
              private _alunos: Aluno[],
              private _horarios: Horario[]) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get modalidade(): string {
    return this._modalidade;
  }

  set modalidade(value: string) {
    this._modalidade = value;
  }

  get professor(): Professor {
    return this._professor;
  }

  set professor(value: Professor) {
    this._professor = value;
  }

  get alunos(): Aluno[] {
    return this._alunos;
  }

  set alunos(value: Aluno[]) {
    this._alunos = value;
  }

  get horarios(): Horario[] {
    return this._horarios;
  }

  set horarios(value: Horario[]) {
    this._horarios = value;
  }
}
