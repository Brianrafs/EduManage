import { Address } from "./address";
import {User} from "./user";

export class Student extends User{
  constructor(id: string,
              email: string,
              hashedPassword: string,
              logged: boolean,
              private _name: string,
              private _fatherName: string,
              private _motherName: string,
              private _dateOfBirth: Date,
              private _address: Address,
              private _emergencyPhones: string[],
              private _gender: string,
              private _idCard?: string,
              private _cpf?: string) {
    super(id, email, hashedPassword, logged)
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get fatherName(): string {
    return this._fatherName;
  }

  set fatherName(value: string) {
    this._fatherName = value;
  }

  get motherName(): string {
    return this._motherName;
  }

  set motherName(value: string) {
    this._motherName = value;
  }

  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: Date) {
    this._dateOfBirth = new Date(value);
  }

  get emergencyPhones(): string[] {
    return this._emergencyPhones;
  }

  set emergencyPhones(value: string[]) {
    this._emergencyPhones = value;
  }

  get idCard(): any {
    return this._idCard;
  }

  set idCard(value: string) {
    this._idCard = value;
  }

  get cpf(): any {
    return this._cpf;
  }

  set cpf(value: string) {
    this._cpf = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }
}
