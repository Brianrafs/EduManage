import { Classroom } from "./classroom";
import {User} from "./user";

export class Professor extends User{

  constructor(id: number,
              email: string,
              hashedPassword: string,
              private _fullName: string,
              private _idCard: string,
              private _cpf: string,
              private _dateOfBirth: Date,
              private _phoneNumber: string,
              private _gender: string,
              private _classrooms: Classroom[]) {
    super(id, email, hashedPassword)
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get idCard(): string {
    return this._idCard;
  }

  set idCard(value: string) {
    this._idCard = value;
  }

  get cpf(): string {
    return this._cpf;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: Date) {
    this._dateOfBirth = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

  get classrooms(): Classroom[] {
    return this._classrooms;
  }

  set classrooms(value: Classroom[]) {
    this._classrooms = value;
  }
}
