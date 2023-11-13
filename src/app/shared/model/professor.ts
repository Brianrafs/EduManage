import { Classroom } from "./classroom";
/* import { User } from "./user";
 */
export class Professor {
    constructor(id: string,
        public email: string,
       // public hashedPassword: string,
        //public logged: boolean,
        public fullName: string,
        public idCard: string,
        public cpf: string,
        public dateOfBirth: Date,
        public phoneNumber: string,
        public gender: string,
        public classrooms: Classroom[]) {
}
}
