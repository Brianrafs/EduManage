export class Schedule {

  constructor(private _dayOfWeek: string,
              private _time: string) {

  }

  get dayOfWeek(): string {
    return this._dayOfWeek;
  }

  set dayOfWeek(dayOfWeek: string) {
    this._dayOfWeek = dayOfWeek;
  }

  get time(): string {
    return this._time;
  }

  set time(time: string) {
    this._time = time;
  }
}
