import { Classroom } from "./classroom";
/* import { User } from "./user";
 */
export class Professor {
  id?: string;
  public email?: string;
  public fullName?: string;
  public idCard?: string;
  public cpf?: string;
  public dateOfBirth?: Date;
  public phoneNumber?: string;
  public gender?: string;
  public classrooms?: Classroom[];
  public type?: string;

  constructor(id?: string,
        email?: string,
        fullName?: string,
        idCard?: string,
        cpf?: string,
        dateOfBirth?: Date,
        phoneNumber?: string,
        gender?: string,
        classrooms?: Classroom[],
        professor: Professor = {},
        type?: string) {
            this.id = professor.id;
            this.email = professor.email;
            this.fullName = professor.fullName;
            this.idCard = professor.idCard;
            this.cpf = professor.cpf;
            this.dateOfBirth = professor.dateOfBirth;
            this.phoneNumber = professor.phoneNumber;
            this.gender = professor.gender;
            this.classrooms = professor.classrooms;
            this.type = 'Professor';
        }
}
