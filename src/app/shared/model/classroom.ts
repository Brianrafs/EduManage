import { Professor } from "./professor";
import { Schedule } from "./schedule";
import { Student } from "./student";

export class Classroom {
  constructor(public id: number,
    public modality: string,
    public professor: Professor,
    public students: Student[],
    public schedules: Schedule[]) {
}
}
