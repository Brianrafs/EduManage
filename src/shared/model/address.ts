export class Address {

  constructor(private _street: string,
              private _number: string,
              private _city: string,
              private _state: string,
              private _zipCode: string) {}

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get number(): string {
    return this._number;
  }

  set number(value: string) {
    this._number = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    this._zipCode = value;
  }
}
