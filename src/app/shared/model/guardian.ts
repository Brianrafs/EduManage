import { Student } from "./student";
/* import { Address } from "./address"; */
/* import { User } from "./user";
 */
export class Guardian{
    public id?: string;
    public email?: string;
    public fullName?: string;
    public idCard?: string;
    public cpf?: string;
    public dateOfBirth?: Date;
    public phoneNumber?: string;
    public gender?: string;
    public type?: string;
   /* dependentStudents: Student[] */

    constructor(id?: string,
      email?: string,
      fullName?: string,
      idCard?: string,
      cpf?: string,
      dateOfBirth?: Date,
      phoneNumber?: string,
      gender?: string,
      type?: string,
      guardian: Guardian = {} ) {
    this.id = id;
    this.email = guardian.email;
    this.fullName = guardian.fullName;
    this.idCard = guardian.idCard;
    this.cpf = guardian.cpf;
    this.dateOfBirth = guardian.dateOfBirth;
    this.phoneNumber = guardian.phoneNumber;
    this.gender = guardian.gender;
    this.type = 'Responsável';
  }
}
