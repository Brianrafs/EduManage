import { Student } from "./student";
/* import { Address } from "./address"; */
/* import { User } from "./user";
 */
export class Guardian{
  constructor(public id: string,
    public email: string,
    // hashedPassword: string,
    // logged: boolean,
    public fullName: string,
    public idCard: string,
    public cpf: string,
    public dateOfBirth: Date,
    public phoneNumber: string,
    public gender: string,
   /* dependentStudents: Student[] */) {
}
}
