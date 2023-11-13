import { Address } from "./address";
/* import { User } from "./user";
 */
export class Student {
    constructor(public id: string,
        //hashedPassword: string,
        //logged: boolean,
        public name: string,
        public fatherName: string,
        public motherName: string,
        public dateOfBirth: Date,
        public address: Address,
        public emergencyPhones: string[],
        public gender: string,
        public idCard?: string,
        public cpf?: string,
        public email?: string) {
}
}
