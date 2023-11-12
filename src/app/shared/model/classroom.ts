import { Professor } from "./professor";
import { Schedule } from "./schedule";
import { Student } from "./student";

export class Classroom {

  constructor(private _id: number,
              private _modality: string,
              private _professor: Professor,
              private _students: Student[],
              private _schedules: Schedule[]) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get modality(): string {
    return this._modality;
  }

  set modality(value: string) {
    this._modality = value;
  }

  get professor(): Professor {
    return this._professor;
  }

  set professor(value: Professor) {
    this._professor = value;
  }

  get students(): Student[] {
    return this._students;
  }

  set students(value: Student[]) {
    this._students = value;
  }

  get schedules(): Schedule[] {
    return this._schedules;
  }

  set schedules(value: Schedule[]) {
    this._schedules = value;
  }
}
